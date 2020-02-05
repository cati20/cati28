const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')

const Client  = require('../models/Client')
const Booking  = require('../models/Booking')

// @route       GET api/bookings
// @ desc       Get all user bookings
// @access      Private
router.get('/',auth,async (req, res) =>{
    try {
        const booking = await  Booking.find({client: req.client.id}).sort({date: -1});
        res.json(booking)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
        
    }
});

// @route       POST api/bookings
// @ desc       Add new bookings
// @access      Private
router.post('/',[auth, [
    check('name', 'Please enter your name').not().isEmpty(),
    check('surname', 'Please enter your surname').not().isEmpty(),
    check('cellphone', 'Please enter a valid cellphone number').not().isMobilePhone(),
    check('appointment', 'Please enter a booking date').not().isEmpty(),
    check('time', 'Please enter time for appointment').not().isEmpty()
]], 
async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name,surname, cellphone, appointment, styling,time } = req.body;

    try {
        const newBooking = new Booking ({
                name,
                surname,
                cellphone,
                appointment,
                client : req.client.id,
                styling,
                time
                
        });

        const book = await newBooking.save();

        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'Server error'})
    }
});

// @route       PUT api/bookings/:id
// @ desc       Update bookings
// @access      Private
router.put('/:id',auth ,async (req, res) =>{
    const {name,surname, cellphone, booking, style, time} = req.body;
    
    //build booking object
    const bookingFields = {}
    if(name) bookingFields.name = name;
    if(surname) bookingFields.surname = surname;
    if(cellphone) bookingFields.cellphone = cellphone;
    if(appointment) bookingFields.booking = booking;
    if(styling) bookingFields.style = style;
    if(time) bookingFields.time = time

    try {
        let book = await Booking.findById(req.params.id);
        if(!book) return res.status(404).json({mssg:'booking not found'});

        //make sure client owns bookings
        if (book.client.toString() != req.client.id){
           return res.status(401).json({msg:'Not authorized'});
             
        }

        //update booking
        book = await Booking.findByIdAndUpdate(req.params.id,
            {$set: bookingFields},
            {new: true});

            res.json(book)
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'Server error'})
    }

});

// @route       GET api/bookings
// @ desc       Delete Clients bookings
// @access      Pricate
router.delete('/:id', auth ,async (req, res) =>{
    try {
        let book = await Booking.findById(req.params.id);
        if(!book) return res.status(404).json({mssg:'booking not found'});

        //make sure client owns bookings
        if (book.client.toString() != req.client.id){
           return res.status(401).json({msg:'Not authorized'});
             
        }

        await Booking.findByIdAndRemove(req.params.id)

            res.json({msg : 'booking removed'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'Server error'})
    }
});


module.exports = router;