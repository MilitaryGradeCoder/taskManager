const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const app = express();
mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("Mongo DB Connected Successfully");
}).catch((error)=>{console.log("Error connecting Mongo DB", error)})


app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Backend listening on port ${process.env.PORT}`)
})