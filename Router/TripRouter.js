const express=require('express')
const { tripModel } = require('../Models/TripModel')
const TripRouter=express.Router()

TripRouter.post("/insert",async(req,res)=>{
    try {
        await tripModel.insertMany(req.body)
        res.send('checking...')
    } catch (error) {
        console.log(error)
    }
})

module.exports={TripRouter}