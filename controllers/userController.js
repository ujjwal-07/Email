const User = require("../models/userModel");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.json())

exports.getNo = (req,res)=>{
    res.send("Hello Hala Madrid")
}

exports.getUser = async (req,res)=>{
    try {
        const allUsers = await User.find(); // Fetch all users
        res.render('index', { users: allUsers });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Add a new user to the database
exports.addUser = async (req, res) => {
    try {
        console.log(req.body)
        const { fname,lname, email } = req.body;
        const newUser = new User({ fname,lname, email });
        await newUser.save(); // Save the user to the database
        res.send('Data Inserted Successfully');
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Internal Server Error");
    }
};

// DUMMY CODE FOR NOW