const express = require('express')
const router = express.Router()
const config =require('config')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const auth = require('../../middlewares/auth')

const User = require('../../models/user')

// Router 

// @route   POST api/auth
// @desc    Auth user
// @access  Public
 router.post('/',(req,res) => { 
    const { email, password} = req.body
    //check for the Fields 
    if ( !email || !password) {
        return res.status(400).json({ msg : "Plsase Enter All Fields"})
    }
    // check for user
    User.findOne({ email }).then(user => {
        if (!user) return res.status(400).json({msg :" user Does Not exists"})

        // Valdiate password
        bcrypt.compare(password,user.password).then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: "Invalid Password"})
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
 })

// @route   get api/auth/user
// @desc    get user date
// @access  Private
router.get('/user',auth , (req,res) => {
    let { id } = req.user
    User.findById(id).select('-password')
    .then(user => res.json(user))
})
module.exports = router
