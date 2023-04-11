const express=require('express')
require('dotenv').config()
const {connection}=require('./db')
const { tripModel } = require('./Models/TripModel')
const {TripRouter}=require('./Router/TripRouter')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())

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