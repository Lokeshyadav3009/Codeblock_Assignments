const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');


// Display all the products
router.get('/blogs', async(req, res) => {
    
    const blogs=await Blog.find({});

    res.render('index',{blogs});
})


// Get the form for new blogs
router.get('/blogs/new', (req, res) => {
    res.render('new');
})


// Create New Blog
router.post('/blogs', async(req, res) => {

    await Blog.create(req.body.blogs);
    
    res.redirect('/blogs');
});


// Show particular product
router.get('/blogs/:id', async(req, res) => {
    
    const blog=await Blog.findById(req.params.id).populate('reviews');


    res.render('show', { blog });
})

// Get the edit form
router.get('/blogs/:id/edit', async(req, res) => {

    const blog=await Blog.findById(req.params.id);

    res.render('edit',{blog});
})

// Upadate the particular product
router.patch('/blogs/:id', async(req, res) => {
    
    await Blog.findByIdAndUpdate(req.params.id, req.body.blogs);

    res.redirect(`/blogs/${req.params.id}`)
})


// Delete a particular product
router.delete('/blogs/:id', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/blogs');
});

// Creating a New Comment on a Product

router.post('/blogs/:id/review', async (req, res) => {
    
    const blog = await Blog.findById(req.params.id);
    const review = new Review(req.body);
    console.log(review);

    blog.reviews.push(review);

    await review.save();
    await blog.save();

    res.redirect(`/blogs/${req.params.id}`);
})


module.exports = router;