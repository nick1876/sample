const mongoose=require('mongoose');
const Product = require('./Model/Product');


let products=[
    {
        name:"Poco F4 ",
        img:"https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-f4-5g-01.jpg",
        price:30000,
        desc:"POCO F4 is equipped with Snapdragon® 870 with 5G, Flagship 6.67 inches E4 AMOLED display, 64MP main camera with OIS and 67W turbo charging"
    },
    {
        name:"iphone 15 pro",
        img:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
        price:80000,
        desc:"All iPhone 15 models are fast-charge capable and can charge up to 50 percent in 30 to 35 minutes with a 20W or higher power adapter."
    },{
        name:"vivo v29",
        img:"https://cdn1.smartprix.com/rx-ik5juhIwq-w1200-h1200/k5juhIwq.jpg",
        price:40000,
        desc:"This phone features a streamlined 3D curved display with a seamless transition between the smooth and delicate curved surface and the frame"
    },{
        name:"One plus 11",
        img:"https://www.oneplus.com/content/dam/oasis/page/2023/global/home/salami-share.jpg",
        price:60000,
        desc:"OnePlus 11 5G, The Shape of Power. Equipped with Snapdragon® 8 Gen 2, up to 16GB RAM, hardware-assisted 3rd Gen Hasselblad Camera for Mobile, 100W SUPERVOOC Charger"
    }
]

//function to feed dummy data in seedDB and insertMany will return a promise 
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded");
}
module.exports = seedDB;