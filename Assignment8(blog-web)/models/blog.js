const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    author: {
        type: String,
    },
    desc: {
        type: String
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;