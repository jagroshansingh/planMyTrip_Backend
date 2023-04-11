const express=require('express')
require('dotenv').config()
const {connection}=require('./db')
const { tripModel } = require('./Models/TripModel')
const {TripRouter}=require('./Router/TripRouter')
const app=express()
app.use(express.json())

// app.post('/',async(req,res)=>{
//     try {
//         await tripModel.insertMany(req.body)
//         res.send('checking...')
//     } catch (error) {
//         console.log(error)
//     }
// })
app.use('/',TripRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log('DB connection successfully')
    } catch (error) {
        console.log('Connection to DB failed')
        console.log(error)
    }
    console.log(`Server is running a PORT ${process.env.PORT}`)
})