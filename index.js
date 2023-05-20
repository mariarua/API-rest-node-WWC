const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const RoutesV1 = require("./src/v1/routes");
const mongoose = require("mongoose");

const sequelize = require("./src/v1/utils/postgresql.config");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load app middlewares
app.use(logger("dev"));

// load our API routes
app.use(RoutesV1);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Documentation API REST",
      description: "Documentation for API REST of a product list",
      contact: {
        name: "María Isabel Rúa Velez",
        url: "https://github.com/mariarua/API-rest-node-WWC",
        email: "ruavelezm@gmail.com",
      },
      schemes: ["http"],
    },
  },
  jsonEditor: true,
  basePath: "/",
  apis: ["./routes"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const start = async () => {
  try {
    await sequelize.sync();
    console.log("Database connected to PostgreSQL");
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Aplicación corriendo en http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

start();
