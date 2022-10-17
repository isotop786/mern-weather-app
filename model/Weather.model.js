const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    lat:{
        type: Number,
        required: true,
    },
    long:{
        type: Number,
        required: true,
    },

    temp:{
        type:Number,
        required:true,
    },

    location:{
        type:String,
        trim: true,
    }, 

    humidity: {
        type : Number,
    },

    status: {
        type: String, 
        required: false,
        trim: true
    },

    time: {
        type: Date,
        required: true,
        default: Date.now
    }
   

})


module.exports = mongoose.model("Weather",weatherSchema)