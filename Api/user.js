const product = require("./productSchemas");
require("./config");

const getPosts = async (req, resp) => {
  try {
    let data = await product.find();
    console.log("data fetch successfully");
    data = resp.status(200).send({ productData: data });
  } catch {
    resp.status(400).send({ err: "Something went wrong" });
  }
};
const createPosts = async (req, resp) => {
  console.log("req.body", req.body);
  try {
    let data = new product(req.body);
    data = await data.save();
    console.log(data);
    return resp.status(200).send("Data saved succesfully");
  } catch {
    resp.status(400).send({ err: "Something went wrong" });
  }
};
const updateUser = async (req, resp) => {
  try {
    let data = await product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.status(200).send({ ProductData: data });
  } catch {
    resp.status(400).send({ err: "Something went wrong" });
  }
};
const deleteUser = async (req, resp) => {
  try {
    let data = await product.deleteOne({ _id: req.params.id });
    resp.send(data);
  } catch {
    resp.status(400).send({ err: "Something went wrong" });
  }
};
module.exports = {
  getPosts,
  createPosts,
  updateUser,
  deleteUser,
};
