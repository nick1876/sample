const express=require('express');
const Product = require('../Model/Product');
const Review = require('../Model/Review');

const router=express.Router()  //mini application/instance  we use it instead of app
//we use router which helps to send the request 

//We have to perform the crud all activities here


router.post('/products/:id/review',async (req,res)=>{ //This route will hit when our form will get submitted
    console.log(req.params);
    console.log(req.body);
    let{id}=req.params;
    let{rating,comment}=req.body;

    let product=await Product.findById(id);
    let review=new Review({rating,comment});

    product.reviews.push(review);
    await product.save();
    await review.save();
    res.send('review stored successfully');
})

module.exports=router;
