const express = require("express")
const router = express.Router()


router.put("/get" , (req,res)=>{
    console.log(req)
    res.send("hello world")
})






module.exports = router