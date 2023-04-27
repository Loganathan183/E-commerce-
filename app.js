const express = require("express");
const app = express();
require("dotenv").config()

const connectDB = require('./connect.js') 
app.get('/',(req,res)=>{
res.status(200).send("Successfully");
});
const PORT =5000;
const start = async() =>{
 await connectDB(process.env.MONGO_URI);
//serevr run
app.listen(PORT,()=>{
    console.log ('server listening to port');
});
};
 start();