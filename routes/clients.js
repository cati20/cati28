const express = require('express');
const router = express.Router();

// @route       POST api/clients
// @ desc       register clinets
// @access      Public
router.post('/', (req, res) =>{
    res.send('Registers a client');
});


module.exports = router;