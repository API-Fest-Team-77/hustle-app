const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// create a post
router.post('/', async (req, res) => {
    // create a new post
    const newPost = new Post(req.body);
    try {
        // save that post in the DB
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update a post
router.put("/:id", async (req, res) => {
    try {
        // grab the post by id
        const post = await Post.findById(req.params.id);

        // check if user is authorized to update that post
        if (post.userId === req.body.userId) {
            // Update the post
            await Post.updateOne({ $set: req.body });
            res.status(200).json("Post updated Succesfully!")
        } else {
            res.status(403).json("You are not authorized to update this post.");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


// delete a post
router.delete('/:id', async (req, res) => {
    try {
        // grab the post by id
        const post = await Post.findById(req.params.id);


        // check if user is authorized to delete that post
        if (post.userId === req.body.userId) {
            // delete the post
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Post deleted Succesfully!")
        } else {
            res.status(403).json("You are not authorized to update this post.");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// like a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("You liked this post!");
        } else {
            await Post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("You Disliked this post!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


// get timeline posts
router.get("/timeline", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId => {
                return Post.find({ userId: friendId });
            })
        );
        res.json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error);
    }
});

// get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;