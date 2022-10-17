const axios = require('axios');
const Weather = require('../model/Weather.model');

exports.getParams = async (req,res) =>{
    var lat = req.body.lat;
    var long = req.body.long;

    try{
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}`)

    const temp = await Math.round(data.data.main.temp - 273.15)

    const weather = await new Weather({
        lat,
        long, 
        location: data.data.name,
        temp : temp,
        name: data.data.name,
        humidity: data.data.main.humidity,
        status: data.data.weather[0].main
    })

    await weather.save();

    res.send(weather)
}catch(err){
    console.log(err)
}
}

exports.getWeatherData =  (req,res)=>{
     Weather.find().select("temp location name humidity status")
     .then(data=>{
        res.status(200).json({
            data
        })

    })
}