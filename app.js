const express = require('express')
const mongoose = require('mongoose')
const config =require('config')
// import  Routes
const ItemRoutes = require('./Routes/api/items')
const UsersRoutes = require('./Routes/api/user')
const AuthRoutes = require('./Routes/api/auth')


//app init
const app = express()

const DBURi = config.get('mangoURI')
mongoose.connect(DBURi,{ useNewUrlParser: true,
useCreateIndex: true },
() => {console.log('Data Base Is Open for You Baby ^_^')})

//middlewaress
app.use(express.json())




// Routes
app.use('/api/items',ItemRoutes)
app.use('/api/user',UsersRoutes)
app.use('/api/Auth',AuthRoutes)







module.exports = app