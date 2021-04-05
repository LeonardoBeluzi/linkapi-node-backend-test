import mongoose from 'mongoose'

const DealSchema = new mongoose.Schema({
    date: {
        type: Date,
        require: true
    },

    value: {
        type: Number,
        require: true
    }
})

const Deal = mongoose.model('Deal', DealSchema)

export default Deal