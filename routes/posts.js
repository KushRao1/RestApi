const express = require('express');
const router  = express.Router();
const Post = require('../models/Post');

// gets pack all the post data form database
router.get('/', async (req,res) =>{
  try {
      const posts = await Post.find();
      res.json(posts);
  } catch (error) {
    res.json({message : error});
  }
}); 


//Submits a posts
router.post('/',async (req,res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    console.log(post);
    
   //saving the data to database
   try {
    const savedPost = await post.save();
    res.json(savedPost);
     
   } catch (error) {
     res.json({message : error});
   }
  
});

//Get specific post 

router.get('/:postId',async(req,res)=>{
   //to submit or get data we can use model 

   try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
   } catch (error) {
     res.json({message :error}); 
   }
   
});


//delete a specfic post
router.delete('/:postId',async(req,res) => {
  try {
    const removePost = await Post.remove({_id : req.params.postId});
    res.json(removePost);
   } catch (error) {
     res.json({message :error}); 
   }
});


//Update post 

router.patch('/:postId',async(req,res) =>{
  try {
    const updatePost = await Post.updateOne(
      {_id : req.params.postId},
      {$set:{title: req.body.title} }
      );
    res.json(updatePost);
   } catch (error) {
     res.json({message :error}); 
   }
});
module.exports = router;