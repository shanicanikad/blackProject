const mongoose = require("../db/connectionW");

const Schema = mongoose.Schema;
const Womenswear = new Schema({

  logo1: String,
  brand_name: String,
  CEO: String,
  type: String,
  price_point: String,
  categories: [
    {
      category: String,
      products: [
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
      ],
    },
  ],
  link: String, 


  logo2: String,
  brand_name: String,
  CEO: String,
  type: String,
  price_point: String,
  categories: [
    {
      category: String,
      products: [
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
      ],
    },
  ],
  link: String,

  logo3: String,
  brand_name: String,
  CEO: String,
  type: String,
  price_point: String,
  categories: [
    {
      category: String,
      products: [
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
      ],
    },
  ],
  link: String,

  logo4: String,
  brand_name: String,
  CEO: String,
  type: String,
  price_point: String,
  categories: [
    {
      category: String,
      products: [
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
        {
          name: String,
          image_url: String,
          details: String,
        },
      ],
    },
  ],
  link: String,
});

module.exports = mongoose.model("Womenswear", Womenswear);
