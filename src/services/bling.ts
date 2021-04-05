import axios, { AxiosResponse } from 'axios'

const apikey = process.env.BLING_API_KEY

const url = `https://bling.com.br/Api/v2`

const request = axios.create({
    baseURL: url,
    headers: {
        contentType: 'application/json'
    }
})

export default {
    //https://ajuda.bling.com.br/hc/pt-br/articles/360047064693-POST-pedido
    async storeDeals(xml: String) {
        const params = {
            apikey,
            xml
        }

        try {
            const response: AxiosResponse<any> = await request.post('/pedido/json/', null, { params: params })

            if (response.data.retorno.erros) {
                const errorsArray: any[] = response.data.retorno.erros
                
                errorsArray.forEach(error => {
                    console.log(error)
                })

                return false
            }
            
            return true
        } catch (error) {
            console.log(error)
            return null
        }
    }
}