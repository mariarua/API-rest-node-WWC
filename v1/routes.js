const express = require("express");
const {
  getAllProducts,
  addProduct,
} = require("./controllers/products.controller");
const router = express.Router();
const validator = require("./middlewares/validator");

// get all products
router.get("/products/", getAllProducts);

// create new product
router.post(
  "/products/",
  validator("products", "createProductSchema"),
  addProduct
);

// change product
router.patch("/products/{id}", getAllProducts);

// delete product
router.delete("/products/{id}", getAllProducts);

module.exports = router;
