const express = require('express')
const router = express.Router()
const config =require('config')
const jwt =require('jsonwebtoken')

const User = require('../../models/user')

// Router 

// @route   POST api/user
// @desc    POST One USer
// @access  Public
 router.post('/',(req,res) => { 
    const {name, email, password} = req.body
    //check for the Fields 
    if (!name || !email || !password) {
        return res.status(400).json({ msg : "Plsase Enter All Fields"})
    }
    // check for user
    User.findOne({ email }).then(user => {
        if (user) return res.status(400).json({msg :" user already exists"})
    })
    // save it to data base
    let newUser =new User({
        name,
        email,
        password,
    })
    newUser.save().then(user => {

        jwt.sign(
            {id:user.id},
            config.get('jwtSecret'),
            {expiresIn: 3600},
            (err,token) => {
                if (err) throw err
                res.json({
                    token,
                    user: {
                        id:user.id,
                        name:user.name,
                        email:user.email
                    }
                })
            }

        )
    })
 })



module.exports = router
