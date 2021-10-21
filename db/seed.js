const womenswear = require("../models/womenswear");
const womenswearData = require("../db/womenswear.json")

console.log(womenswearData)
womenswear.deleteMany({}).then(()=> {
  womenswear.create(womenswearData).then(()=>{
    womenswear.find({})
        .then((res) => 
            console.log(res))
        })
        .catch((err)=>{
            console.log(err)
        })
})
const menswear = require("../models/menswear");
const menswearData = require("../db/menswear.json");
console.log(menswearData)

menswear.deleteMany({}).then(() => {
  // Mongoose Model creating data
  menswear.create(menswearData).then((output) => {
    console.log(output);
    process.exit();
  });
});
