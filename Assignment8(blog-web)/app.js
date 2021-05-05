const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const blogRoutes = require('./routes/blog');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(blogRoutes);


// ***************** DB ***************** 
mongoose.connect('mongodb://localhost:27017/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
    })
    .then(()=>{
        console.log("DB Connected ");
    })
    .catch((err)=>{
        console.log("DB connection error");
        console.log(err);
    })



// seedDB();



app.get("/",(req,res)=>{
    res.send("<h1>This is home page</h1>");
})

app.listen(3000,()=>{
    console.log("Connected");
})