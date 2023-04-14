const getAllProducts = (req, res) => {
  products = fs.readFile("archivo.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      const objetoJSON = JSON.parse(data);
      res.json(objetoJSON);
    }
  });
};

module.exports = {
  getAllProducts,
};
