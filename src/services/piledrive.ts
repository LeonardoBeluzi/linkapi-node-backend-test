import axios, { AxiosResponse } from 'axios'

const api_token = process.env.PILEDRIVE_API_KEY

const url = `https://api.pipedrive.com/v1/deals`

const request = axios.create({
    baseURL: url,
    headers: {
        contentType: 'application/json'
    }
})

export default {
    //https://developers.pipedrive.com/docs/api/v1/#!/Deals/getDeals
    async getDeals(lastId: Number) {
        const params = {
            api_token,
            status: 'won',
            start: 0,
            sort: 'won_time DESC'
        }

        try {
            const response: AxiosResponse<any> = await request.get('/deals', { params: params })

            const responseArray: any[] = response.data.data

            const filteredArray = responseArray.filter((item) => {
                return item.id > lastId
            })

            return filteredArray
        } catch (error) {
            console.log(error)
            return null
        }
    }
}