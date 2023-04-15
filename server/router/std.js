const express = require("express");
const router = new express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

// -----------------------Post Methods------------------


// -----------------------Register user---------------------
router.post("/register", async (req, res) => {
    try {
        const { username, password, profile, email } = req.body;

        // checking the existing user
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Sorry username is already exist" });
        }

        //  check for existing email
        user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "Sorry email is already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = await User.create({
            username,
            password: hashedPassword,
            profile: profile || '',
            email
        })

        const newUser = await user.save();
        res.status(201).send(newUser);

    } catch (error) {
        return res.status(500).send(error);
    }
})
// -----------------------Register user---------------------


router.post("/registerMail", (req, res) => {
    res.json("register mail user");
})
router.post("/authenticate", (req, res) => {
    res.json("authenticate user");
})


// ----------------------Login user-------------------------
router.post("/login", async(req, res) => {
    const { username, password} = req.body;
    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Sorry Username is not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(500).json("Invalid Login")
        }

        const token = jwt.sign({
            userId : user._id,
            username: user.username
        }, 'secret', {expiresIn: "24h"});

        return res.status(200).send({
            msg:"Login Successful",
            username: user.username,
            token
        })
        
    } catch (error) {
        return res.status(500).send(error);
    }
})




// ----------------------Get request-----------------
router.get("/user/:username", (req, res) => {
    res.json("Username");
})
router.get("/generateOTP", (req, res) => {
    res.json("generateOTP");
})
router.get("/varifyOTP", (req, res) => {
    res.json("varifyOTP");
})
router.get("/createReset", (req, res) => {
    res.json("createReset");
})



// ----------------------Put request-------------------
router.put("/updateuser", (req, res) => {
    res.json("updateuser");
})
router.put("/resetPassword", (req, res) => {
    res.json("resetPassword");
})




module.exports = router;