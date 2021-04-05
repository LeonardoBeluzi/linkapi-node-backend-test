import piledrive from '../services/piledrive'
import bling from '../services/bling'
import xmlParser from './xmlParser'
import Sync from '../models/Sync'
import Deal from '../models/Deal'

export default {
    async syncData(lastId: Number) {
        //get all deals from piledrive
        const piledriveData = await piledrive.getDeals(0)

        //lock update requests
        if (piledriveData.length > 0) {
            await Sync.updateOne(null, { updating: true }, { upsert: true })
        }

        try {
            for (const data of piledriveData) {
                let id = data.id
                let wonDate = new Date(new Date(data.first_won_time).toDateString())

                //create deals xml
                let xml = xmlParser.piledriveDataToXML(data)

                //insert deal on bling
                let success = await bling.storeDeals(xml)

                //stop sync on error
                if (success === null) break
                
                //ignore existing deal
                if (success === false) continue

                //update daily value
                let dailyDeal = await Deal.findOne({ date: wonDate })

                if (dailyDeal) {
                    await dailyDeal.updateOne({ date: wonDate, value: dailyDeal.value + data.value }, { upsert: true })
                } else {
                    dailyDeal = new Deal({ date: wonDate, value: data.value })
                    await dailyDeal.save()
                }

                //update last id
                await Sync.updateOne(null, { lastId: id })
            }
        } catch (error) {
            //unlock update requests
            console.log(error)
            await Sync.updateOne(null, { updating: false })
        }

        //unlock update requests
        await Sync.updateOne(null, { updating: false })
    }
}