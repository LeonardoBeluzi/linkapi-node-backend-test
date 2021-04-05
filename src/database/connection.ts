import mongoose from 'mongoose'

const url = process.env.MONGO_ATLAS_URL

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error => {
    if (!error) {
        console.log('Connected to DB')
    } else {
        console.log(error)
    }
}))

export default mongoose