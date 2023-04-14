const express = require("express");
const { getAllProducts } = require("./controllers/products.controller");
const router = express.Router();

// generic route handler
const genericHandler = (req, res, next) => {
  res.json({
    status: "success",
    data: req.body,
  });
};

// get all products
router.get("/products/", getAllProducts);

// create new product
router.post("/products/", genericHandler);

// change product
router.patch("/products/{id}", genericHandler);

// delete product
router.delete("/products/{id}", genericHandler);

module.exports = router;
