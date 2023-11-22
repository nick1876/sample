const express = require('express');
const Product = require('../Model/Product');
const router = express.Router(); //mini instance/application;

const methodOverride=require('method-override');
const Review = require('../Model/Review');
router.use(methodOverride('_Method'));
router.use(express.urlencoded({extended:true}))


// READ
router.get('/products' , async (req,res)=>{
    let products = await Product.find();
    res.render('products/index' , {products})
})

// SHOW A NEW FORM
router.get('/product/new' , (req,res)=>{
    res.render('products/new');
})

// ACTUALLY ADDING IN THE DATABASE
router.post('/products' , async(req,res)=>{
    let {name,img , price , desc} = req.body;
    await Product.create({name,img , price , desc});
    res.redirect('/products');
})

// TO SHOW A PARTICULAR PRODUCT
router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');//
    console.log(foundProduct)
    res.render('products/show' , {foundProduct})

})

// FORM TO EDIT A PARTIICULAR PRODUCT
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    console.log('sam1',foundProduct,'sam');
    res.render('products/edit' , {foundProduct})
})


// TO ACTUALLY CHANGE IN db
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let {name , img , price , desc} = req.body;
    await Product.findByIdAndUpdate( id , {name , img , price , desc});
    res.redirect(`/products/${id}`);
})

// DELETE THE EXISTING PRODUCT
router.delete('/products/:id' , async(req,res)=>{
    let{id}=req.params;
    let product = await Product.findById(id);

    for(let idd of product.reviews){
        await Review.findByIdAndDelete(idd)
    }
    await Product.findByIdAndDelete(id)
    res.redirect('/products');
})





// export so that you can use it in app.ja
module.exports = router;
