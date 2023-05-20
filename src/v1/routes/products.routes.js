const express = require("express");
const router = express.Router();

const validator = require("../middlewares/validator");
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getProducts);

router.post(
  "/",
  validator("products", "createProductSchema"),
  productsController.createProduct
);

router.patch(
  "/:id",
  validator("products", "createProductSchema"),
  productsController.updateProduct
);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
