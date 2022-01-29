const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require('bcrypt');

// update a user
router.put("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {

        // If user wants to update the password
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }

        try {

            const user = await User.findByIdAndUpdate(req.body.userId, {
                $set: req.body
            });

            res.status(200).json("Account has been updated.")

        } catch (error) {

            return res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not authorized to update this account.")
    }

});

// delete user
router.delete("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {

        try {

            await User.deleteOne({ _id: req.body.userId });

            return res.status(200).json("Account has been deleted.")

        } catch (error) {

            return res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not authorized to delete this account.")
    }

});


// get a user profile
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ err: "user not found" });
    }

})

// follow
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("followed!");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You cannot folllow yourself");
    }
});

// unfollow
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("unfollowed!");
            } else {
                res.status(403).json("you don't follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You cannot unfolllow yourself");
    }
})

module.exports = router;