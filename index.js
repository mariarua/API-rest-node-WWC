const Routes = require("./routes");

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

let fs = require("fs");

const PORT = 3000;

const app = express();

// load app middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load our API routes
app.use("/", Routes);

app.get("/", (req, res) => {
  res.send("Esta es mi primera app en express");
});

app.get("/api/v1/products/", (req, res) => {
  products = fs.readFile("archivo.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      const objetoJSON = JSON.parse(data);
      res.json(objetoJSON);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
