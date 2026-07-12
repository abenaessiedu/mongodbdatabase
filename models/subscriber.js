const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date, 
        required: true, 
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)