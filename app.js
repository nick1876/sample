const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes=require('./Routes/productRoutes');
const reviewRoutes=require('./Routes/reviewroutes');

app.use(express.urlencoded({extended:true}));

//middleware 
app.use(productRoutes); //vvvimp
app.use(reviewRoutes);


//Connecting the dataset
mongoose.connect('mongodb://127.0.0.1:27017/baigan')  //DB name = baigan
.then(()=>{console.log("DB Connected")})
.catch((err)=>{console.log("Error while connecting DB",err)})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

//Calling the function to enter the data in DB
 //seedDB();

let PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server created at post ${PORT}`);
})