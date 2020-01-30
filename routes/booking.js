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
    check('booking', 'Please enter a booking date').not().isEmpty()
]], 
async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name,surname, cellphone, booking, style, } = req.body;

    try {
        const newBooking = new Booking ({
                name,
                surname,
                cellphone,
                booking,
                client : req.client.id,
                style
                
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
router.put('/:id', (req, res) =>{
    res.send('Update bookings');
});

// @route       GET api/bookings
// @ desc       Delete Clients bookings
// @access      Pricate
router.delete('/:id', (req, res) =>{
    res.send('Delete bookings');
});


module.exports = router;