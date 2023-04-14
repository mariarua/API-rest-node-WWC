const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
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
router.patch(
  "/products/:id",
  validator("products", "updateProductSchema"),
  updateProduct
);

// delete product
router.delete("/products/:id", deleteProduct);

module.exports = router;
