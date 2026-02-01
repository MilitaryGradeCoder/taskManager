const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/task.route");


dotenv.config()

const app = express();

//connect DB
mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("Mongo DB Connected Successfully");
}).catch((error)=>{console.log("Error connecting Mongo DB", error)})

// implement middlewares
app.use(cors());
app.use(express.json());

//implement routes
app.use("/tasks", taskRoutes);

// start server
app.listen(process.env.PORT, ()=>{
    console.log(`Backend listening on port ${process.env.PORT}`)
})