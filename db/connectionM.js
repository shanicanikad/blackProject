const mongoose = require("mongoose");

let mongoURI = "mongodb://shanicanikad1:shanicanikad97@cluster0-shard-00-00.ozamz.mongodb.net:27017,cluster0-shard-00-01.ozamz.mongodb.net:27017,cluster0-shard-00-02.ozamz.mongodb.net:27017/blackProject?ssl=true&replicaSet=atlas-lvq8ct-shard-0&authSource=admin&retryWrites=true&w=majority";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/menswear";
}
mongoose.createConnection(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
module.exports = mongoose;


