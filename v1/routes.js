const express = require("express");

const router = express.Router();
const validator = require("./middlewares/validator");
const { Product } = require("./controllers/models");
const { default: mongoose } = require("mongoose");

router.get("/health", (_, res) =>
  res.json({
    status: "ok",
    hasConnection: !!process.env.MONGODB_CONNECTION,
  })
);

router.get("/products/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    res.json({ error: e });
  }
});

router.post(
  "/products/",
  validator("products", "createProductSchema"),
  async (req, res) => {
    const product = new Product(req.body);
    try {
      await product.save().then(() => res.json(product));
    } catch (e) {
      res.json({ error: e });
    }
  }
);

router.patch(
  "/products/:id",
  validator("products", "createProductSchema"),
  async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    try {
      const currentProduct = await Product.findOneAndUpdate(
        { _id: id },
        product
      );
      res.json(product);
    } catch (e) {
      res.json({ error: e });
    }
  }
);

router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.json({
      status: "Ok",
      product: product,
    });
  } catch (e) {
    res.json({ error: e });
  }
});

module.exports = router;
