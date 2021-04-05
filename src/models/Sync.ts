import mongoose from 'mongoose'

export interface ISync extends mongoose.Document {
    lastId: Number;
    updating: Boolean;
}

export const SyncSchema = new mongoose.Schema({
    lastId: {
        type: Number,
        require: true
    },

    updating: {
        type: Boolean,
        required: false
    }
})

const Sync = mongoose.model<ISync>('Sync', SyncSchema)

export default Sync