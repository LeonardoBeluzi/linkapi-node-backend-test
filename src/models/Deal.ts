import mongoose from 'mongoose'

export interface IDeal extends mongoose.Document {
    date: Date;
    value: Number;
}

export const DealSchema = new mongoose.Schema({
    date: {
        type: Date,
        require: true
    },

    value: {
        type: Number,
        require: true
    }
})

const Deal = mongoose.model<IDeal>('Deal', DealSchema)

export default Deal