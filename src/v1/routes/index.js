const express = require("express");
const router = express.Router();

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

module.exports = router;
