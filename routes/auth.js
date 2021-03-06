const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')

const Client  = require('../models/Client')

// @route       POST api/auth
// @ desc       Authenticate client and get token
// @access      Private
 router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()

],

async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });

    }

    const {email , password} = req.body;

    try {

        let client = await Client.findOne({ email});

        if (!client) {
            return res.status(400).json({msg: 'Invalid credentials'}) 
        }

        const isMatch =  await bcrypt.compare(password, client.password);

        if (!isMatch) {
            return res.status(400).json({msg: 'Invalid credentials'})
        }

        const payload = {
            client :{
                id:client.id
            }
        }

        jwt.sign(payload, config.get('jwtsecret'), {
            expiresIn:3600
        }, (err, token) => {
            if (err) throw err ;
            res.json({ token})  
        })
        
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json({msg : 'Server error'})
    }


}); 


// @route       GEt api/auth
// @ desc       Get logged in client
// @access      Public
router.get('/', auth, async (req, res) =>{
    try {
        const client = await Client.findById(req.client.id).select('-password');
        res.json(client);
    } catch (error) {
        console.error(error.message)
        res.status(500).json({msg: 'Server Error'})
    }
}); 






module.exports = router;