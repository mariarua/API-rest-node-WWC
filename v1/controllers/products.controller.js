const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const { products } = require("../validators");

const getAllProducts = (req, res) => {
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      const productList = JSON.parse(data);
      res.status(200).json(productList);
    }
  });
};

const addProduct = (req, res) => {
  const newId = uuidv4();
  const product = { id: newId, ...req.body };
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      const productList = JSON.parse(data);
      productList.push(product);
      console.log(productList);
      fs.writeFile("data.txt", JSON.stringify(productList), (err) => {
        if (err) {
          console.error(err);
        }
        res.status(200).json(productList);
      });
    }
  });
};

module.exports = {
  getAllProducts,
  addProduct,
};
