const mongoose = require('mongoose');
const BookingSchema = mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    },
    name : {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    
    cellphone : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    },
    booking: {
        type: String,
        required: true
    },
    style: {
        type: String,
        default: 'acrylic'
    }
});

module.exports = mongoose.model('booking', BookingSchema)