import 'dotenv/config'

import express from 'express'
import router from './routes'
import errorHandler from './middlewares/errorHandler'
import database from '../src/database/connection'

//Creating API and getting port
const api = express()
const port = process.env.PORT || 8000

//Defining middlewares
api.use(express.json())
api.use(router)
api.use(errorHandler)

//Starting database connection
database.connect()

//Stating API
api.listen(port, () => {
    console.log(`Api listening on port ${port}`)   
})