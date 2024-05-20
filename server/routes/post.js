const router = require('express').Router();
const Post = require('../models/Post');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/users/:userID/posts', jsonParser, async (req,res) => {
    const userID = req.params.userID;
    const user = users.find(user => user.id === userID);
    const newPost = new Post({
        username: user.id,
        songTitle: req.body.songTitle,
        link: req.body.link,
        image: req.body.image
    })
    try{
        const savedPost = await newPost.save();
        res.send('Post was successfully created!');
    }catch(err) {
        res.status(400).send(err);
    }
});

router.delete('/users/:userID/posts/:postID', jsonParser, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        if (post.id === req.body.postId) {
            await post.deleteOne();
            res.send("this post has been deleted")
        } else {
            res.send("you are attempting to delete a different post")
    } 
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/users/:userID/posts/:postID', jsonParser, async (req, res) => {
    try {
      const post = await Post.findById(req.params.postID);
      res.send("Successfully obtained this post");
    } catch (err) {
      res.status(400).send(err);
    }
  });

router.put('/users/:userID/posts/:postID', jsonParser, async (req,res) => {
    try {
        const post = await Post.findById(req.params.postID);
        if (post.postId === req.body.postId) {
          await post.updateOne({ $set: req.body });
          res.send("the post has been updated");
        } else {
          res.send("You cannot update this post");
        }
      } catch (err) {
        res.status(400).send(err);
      }
});

module.exports = router;