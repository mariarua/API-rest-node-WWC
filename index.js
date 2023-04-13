const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Esta es mi primera app en express");
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
