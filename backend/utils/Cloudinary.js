const dotenv = require('dotenv').config();
const cloudinary = require("cloudinary").v2;

const name = process.env.CLOUDINARY_CLOUD_NAME;
const akey = process.env.CLOUDINARY_API_KEY;
const skey = process.env.CLOUDINARY_SECRET_KEY;

// console.log(name, akey, skey)

cloudinary.config({
    cloud_name: name,
    api_key: akey,
    api_secret: skey
})

module.exports = cloudinary;