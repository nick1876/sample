const mongoose = require('mongoose');

// 1) Create a schema (blueprint)
//We have to apply complusion on name and price i.e without that no one can buy anything therefore we create an object and set the required parameter as true
//trim: to remove extra spaces
//module.exports=> to export the Model and can be used in another file by exporting it 
//To initalize the Project we have dummydata in our DB , therefore we make a new file seed.js i.e to provide the data 
//We have to create a Reviews array to store the ids(object ids which are coming from other collections) of the review of each Product
//Therefore we have to specify the Collections to Product from which ids are coming to the array

//Note : Object id is itself unique type

let productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId, //Syntax to instruct the mongoose to go to another Schema then its Types and fetch ObjectId from there
        ref:'Review'  //ref refers to the reference to the Collections from which we want to get ObjectId
    }]
})

// 2) => Create Model

let Product = mongoose.model('Product',productSchema);
module.exports=Product;

