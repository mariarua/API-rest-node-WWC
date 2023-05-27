const express = require("express");
const router = express.Router();
const path = require("path");

const productsRouter = require("./products.routes");
const usersRouter = require("./users.routes");

const BASE_URL = "/api/v1/";

router
  .get("/health", (_, res) =>
    res.json({
      status: "ok",
      hasConnection:
        !!process.env.MONGODB_CONNECTIO && !!process.env.POSTGRESQL_URL,
    })
  )
  .use(`${BASE_URL}products`, productsRouter)
  .use(`${BASE_URL}users`, usersRouter);

if (process.env.NODE_ENV !== "production") {
  router.get("/login", (req, res) => {
    res.sendFile(path.resolve("src/v1/views/login.html"));
  });
  router.get("/playground", (req, res) => {
    res.sendFile(path.resolve("src/v1/views/playground.html"));
  });
}

module.exports = router;
