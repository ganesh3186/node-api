const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Brand");

product = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
});
module.exports = mongoose.model("products", product);
