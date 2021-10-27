const express = require("express")
const router = express.Router()
const {Person, Player, GoalKeeper} = require("./soccerClasses")


router.put("/add",(req,res)=>{
    let firstName = req.body.firstName;
    let lastName = req.body.lastName
    let salary  = req.body.salary
    let age = req.body.age
    let id = req.body.id
    let x =  new Person(firstName, lastName,salary,age,id)
    res.send(x)
})



module.exports = router





