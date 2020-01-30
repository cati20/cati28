const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')

const Client  = require('../models/Client')

// @route       POST api/clients
// @ desc       register clients
// @access      Public
router.post('/', [
    check('name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please eneter a valid email').isEmail(),
    check('password', 'Please eneter a password with 6 or more characters').isLength({min:6})
],
async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });

    }

    
    const {name, email, password} = req.body;

    try {
        let client = await Client.findOne({email})

        if(client){
            return res.status(400).json({msg: " Client user already exist"})
        }

        client = new Client({
            name,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);

        client.password = await bcrypt.hash(password, salt);

        await client.save();
        
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
        res.status(500).send('Server error');
    }
});


module.exports = router;