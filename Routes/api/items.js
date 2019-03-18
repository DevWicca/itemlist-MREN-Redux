const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')
// Models
const Item = require('../../models/item')

// Router 

// @route   POST api/item
// @desc    POST One Item
// @access  Public
router.post('/', auth ,(req,res)=>{
    let Newitem = new Item({
        name:req.body.name
    })
    Newitem.save()
            .then(item => res.json(item))
})
// @route   GET api/item
// @desc    get all items
// @access  Public
router.get('/',(req,res) => {
    Item.find()
        .sort({date:-1})
        .then(item =>{
            res.json(item)
        })
})

// @route   Delete api/item
// @desc    Delete one item 
// @access  Public/iguess not in fut
router.delete('/:id' , auth ,(req,res) =>{
    let id = req.params.id
    Item.findByIdAndDelete(id)
        .then(ress => {
            res.status(200).json({
                mass:"item deleted"
            })
        })
})










module.exports = router