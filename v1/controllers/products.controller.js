const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const getAllProducts = (req, res) => {
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("eorrr: ", err);
      res.status(501).json({
        error: err,
      });
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
      res.status(501).json({
        error: err,
        status: 501,
      });
    } else {
      const productList = JSON.parse(data);
      productList.push(product);
      fs.writeFile("data.txt", JSON.stringify(productList), (err) => {
        if (err) {
          console.error(err);
        }
        res.status(200).json(product);
      });
    }
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = req.body;
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
      res.status(501).json({
        error: err,
        status: 501,
      });
    } else {
      const productList = JSON.parse(data);
      const indexProduct = productList.findIndex((p) => p.id == id);
      if (indexProduct == -1) {
        res.status(404).json({
          error: "Producto no encontrado",
          status: 404,
        });
      }
      productList[indexProduct] = product;
      fs.writeFile("data.txt", JSON.stringify(productList), (err) => {
        if (err) {
          console.error(err);
        }
        res.status(200).json(product);
      });
    }
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).json({
        error: err,
        status: 501,
      });
    } else {
      const productList = JSON.parse(data);
      const indexProduct = productList.findIndex((p) => p.id == id);
      if (indexProduct == -1) {
        res.status(404).json({
          error: "Producto no encontrado",
          status: 404,
        });
      }
      const product = productList[indexProduct];
      productList.splice(indexProduct, 1);
      fs.writeFile("data.txt", JSON.stringify(productList), (err) => {
        if (err) {
          console.error(err);
        }
        res.status(200).json({
          message: `Producto ${product.name} fue eliminado`,
        });
      });
    }
  });
};
module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
