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
    appointment: {
        type: Date,
        required: true,
        unique: true
    },
    styling: {
        type: String,
        default: 'acrylic'
    },
    time: {
        type:String,
        require:true,
        unique: true
    }
});

module.exports = mongoose.model('booking', BookingSchema)