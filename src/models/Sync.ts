import mongoose from 'mongoose'

const SyncSchema = new mongoose.Schema({
    lastId: {
        type: Number,
        require: true
    }
})

const Sync = mongoose.model('Sync', SyncSchema)