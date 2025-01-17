const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter")



const app = express();
app.use(express.json())

app.use("/user",userRouter)
mongoose.connect("mongodb+srv://employedatsstore:Ujjwal21@cluster0.i81xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Connected to Mongo Atlas")})
.catch((err)=>{console.log("Error occured : ",err)})


app.listen(3002,()=>{
    console.log("App is running on port 3002")
})
