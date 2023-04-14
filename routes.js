const express = require("express");
const router = express.Router();

// generic route handler
const genericHandler = (req, res, next) => {
  res.json({
    status: "success",
    data: req.body,
  });
};

// create new product
router.post("/api/v1/products", genericHandler);

// change product
router.patch("/api/v1/products/{id}", genericHandler);

// delete product
router.delete("/api/v1/products/{id}", genericHandler);

module.exports = router;

module.exports = router;
