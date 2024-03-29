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

TripRouter.get("/retrieve",async(req,res)=>{
    try {
        let ans=await tripModel.find()
        res.send(ans)
    } catch (error) {
        console.log(error)
    }
})

module.exports={TripRouter}