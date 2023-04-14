const express = require("express");
const logger = require("morgan");
const fs = require("fs");

const RoutesV1 = require("./v1/routes");

const PORT = 3000;
const app = express();

// load app middlewares
app.use(logger("dev"));

// load our API routes
app.use("/api/v1", RoutesV1);

app.get("/", (req, res) => {
  res.send("Esta es mi primera app en express");
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
