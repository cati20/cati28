const express = require('express');
const router = express.Router();

// @route       GET api/bookings
// @ desc       Get all user bookings
// @access      Private
router.get('/', (req, res) =>{
    res.send('Get all bookings');
});

// @route       POST api/bookings
// @ desc       Add new bookings
// @access      Private
router.post('/', (req, res) =>{
    res.send('Add bookings');
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