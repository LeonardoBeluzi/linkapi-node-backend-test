import mongoose from 'mongoose'

const url = process.env.MONGO_ATLAS_URL

export default {
    async connect() {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Connected to DB')
        }).catch((error) => {
            console.log(error) 
        })
    }
}

