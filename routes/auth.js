const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @ desc       Get Logged in Client
// @access      Private
router.get('/', (req, res) =>{
    res.send('Get Logged in Client');
});


// @route       POST api/auth
// @ desc       Auth user & get token
// @access      Public
router.post('/', (req, res) =>{
    res.send('Log in user');
});


module.exports = router;


module.exports = router;