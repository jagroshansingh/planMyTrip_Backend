const mongoose=require('mongoose')

const tripSchema=mongoose.Schema({
    name:String,
    email:String,
    dest:String,
    quantity:String,
    budget:String,
})

const tripModel=mongoose.model('trip',tripSchema)

module.exports={tripModel}