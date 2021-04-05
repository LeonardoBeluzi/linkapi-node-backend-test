import { NextFunction, Request, Response } from 'express'
import Deal from '../models/Deal'
import Sync from '../models/Sync'
import registerDeal from '../functions/registerDeals'

export default {
    async show(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await Deal.find()
            const parsedData = data.map((item) => {
                return {
                    date: item.date.toLocaleDateString(),
                    value: item.value
                }
            })

            return response.send(parsedData)
        } catch (error) {
            next(error)
        }
    },

    async syncData(request: Request, response: Response, next: NextFunction) {
        let lastId: Number = 0

        try {
            const data = await Sync.findOne()

            if (data) {
                if (data.updating) {
                    return response.send({
                        success: false,
                        message: 'Processing data, try again later.'
                    })
                }

                lastId = data.id
            }

            registerDeal.syncData(lastId)   

            return response.send({
                success: true,
                message: 'Processing data.'
            }) 
        } catch (error) {
            next(error)
        }
    }
}