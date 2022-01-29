const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");

// signUp user
router.post('/signup', async (req, res) => {
    // fetch the data from request body
    const { username, firstName, lastName, email, password, location, jobTitle, companyName, about } = req.body;

    try {
        // salt the password
        const salt = await bcrypt.genSalt(10);
        // hash it
        const hashedPassword = await bcrypt.hash(password, salt);
        // create a new user by passing req.body data to User model.
        const user = new User({
            username,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            location,
            jobTitle,
            companyName,
            about
        })
        // save the user into database and respond.
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});


// login user
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username })
        if (!user) return res.status(404).json("user not found");

        // check if password is valid
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json("wrong password");

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }

});

module.exports = router;