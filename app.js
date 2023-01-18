const express=require('express')
const dotenv=require('dotenv')
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes.js");
const {errorHandler} = require('./middleware/errorhandler')
require('./config/DbConnect')
const port=process.env.PORT||5000
dotenv.config();
const app=express()
app.use(express.json())



app.use('/api/goal',goalRoutes);
app.use('/api/user',userRoutes);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`port is connected ${port}`)
})