const express = require("express");
const router = express.Router();

const {getParams, getWeatherData} = require('./controller/weatherController');

router.get('/',(req,res)=>{
    res.send('api v1')
})

router.post('/get_params/', getParams);
router.get('/get_data/', getWeatherData);


module.exports = router;