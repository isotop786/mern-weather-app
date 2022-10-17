const express = require('express');
const app = express();
const morgan = require('morgan');
const connectDB = require('./db')
const router = require('./router');
const cors = require('cors');

require('dotenv/config');
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:"*", credentials:true}))

connectDB()

app.get('/',(req,res)=>{
    res.send('Welcome to Weather app baceknd.')
})

// router
app.use('/api/',router);



app.listen(process.env.PORT || 3001,()=>{
    console.log(`server running on port ${process.env.PORT}`);
})



