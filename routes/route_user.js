const express = require('express')
const route_user = express.Router()
const Usersobj = require('../models/users')

//POST
route_user.post('/createUser',async (req,res)=>{
    const user = new Usersobj({
        name: req.body.name,
        email : req.body.email,
        date : req.body.date
    })
    try{
        const savedUsers = await user.save()
        res.send(savedUsers)

    } catch(err){
        res.status('400').send('Error Occured.')

    }
    
})
//GET
route_user.get('/',async(req,res)=>{
    try{
    const allUsers= await Usersobj.find()
    res.json(allUsers)
    }catch(err){
        res.send(err)
    }

})

route_user.get('/:id',async(req,res)=>{
    try{
    const Users= await Usersobj.findById(req.params.id)
    res.json(Users)
    }catch(err){
        res.send(err)
    }

})







module.exports = route_user