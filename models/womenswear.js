const mongoose = require("../db/connectionW");

const Schema = mongoose.Schema;
const Womenswear = new Schema({

  logo: String,
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
