import 'dotenv/config'

import express from 'express'
import router from './routes'
import errorHandler from './middlewares/errorHandler'

//Creating API and getting port
const api = express()
const port = process.env.PORT || 8000

//Defining middlewares
api.use(express.json())
api.use(router)
api.use(errorHandler)

//Stating API
api.listen(port, () => {
    console.log(`Api listening on port ${port}`)   
})