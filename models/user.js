const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')


const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    register_date:{
        type:Date,
        default:Date.now()
    }
})


UserSchema.pre('save', function(next) {
    let User =this
    bcrypt.genSalt(10, (err,salt) =>{
        bcrypt.hash(User.password, salt, (err, hash) => {
            if (err) throw next(err)
            User.password = hash
            next()
        })
    })
  });


module.exports = mongoose.model('user',UserSchema)