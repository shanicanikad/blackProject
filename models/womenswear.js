const mongoose = require("../db/connectionW");

const Schema = mongoose.Schema;
const Womenswear = new Schema({

  logo1: String,
  brand_name1: String,
  CEO1: String,
  type1: String,
  price_point1: String,
  categories1: [
    {
      category1: String,
      products1: [
        {
          name1: String,
          image_url1: String,
          details1: String,
        },
        {
          name1: String,
          image_url1: String,
          details1: String,
        },
        {
          name1: String,
          image_url1: String,
          details1: String,
        },
        {
          name1: String,
          image_url1: String,
          details1: String,
        },
      ],
    },
  ],
  link1: String, 


  logo2: String,
  brand_name2: String,
  CEO2: String,
  type2: String,
  price_point2: String,
  categories2: [
    {
      category2: String,
      products2: [
        {
          name2: String,
          image_url2: String,
          details2: String,
        },
        {
          name2: String,
          image_url2: String,
          details2: String,
        },
        {
          name2: String,
          image_url2: String,
          details2: String,
        },
        {
          name2: String,
          image_url2: String,
          details2: String,
        },
      ],
    },
  ],
  link2: String,

  logo3: String,
  brand_name3: String,
  CEO3: String,
  type3: String,
  price_point3: String,
  categories3: [
    {
      category3: String,
      products3: [
        {
          name3: String,
          image_url3: String,
          details3: String,
        },
        {
          name3: String,
          image_url3: String,
          details3: String,
        },
        {
          name3: String,
          image_url3: String,
          details3: String,
        },
        {
          name3: String,
          image_url3: String,
          details3: String,
        },
      ],
    },
  ],
  link3: String,

  logo4: String,
  brand_name4: String,
  CEO4: String,
  type4: String,
  price_point4: String,
  categories4: [
    {
      category4: String,
      products4: [
        {
          name4: String,
          image_url4: String,
          details4: String,
        },
        {
          name4: String,
          image_url4: String,
          details4: String,
        },
        {
          name4: String,
          image_url4: String,
          details4: String,
        },
        {
          name4: String,
          image_url4: String,
          details4: String,
        },
      ],
    },
  ],
  link4: String,
});

module.exports = mongoose.model("Womenswear", Womenswear);
