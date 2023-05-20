const productSchema = require("../models/product.schema");
const validator = require("../middlewares/validator");

exports.getProducts = async (req, res) => {
  console.log("hola mundo");
  try {
    const products = await productSchema.find();
    res.json(products);
  } catch (e) {
    res.json({ error: e });
  }
};

exports.createProduct = async (req, res) => {
  const product = new productSchema(req.body);
  try {
    await product.save().then(() => res.json(product));
  } catch (e) {
    res.json({ error: e });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const currentProduct = await productSchema.findOneAndUpdate(
      { _id: id },
      product
    );
    res.json(product);
  } catch (e) {
    res.json({ error: e });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productSchema.findOneAndDelete({ _id: id });
    res.json({
      status: "Ok",
      product: product,
    });
  } catch (e) {
    res.json({ error: e });
  }
};
