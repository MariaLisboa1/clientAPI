const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");
const database = require("../config/database");

if (process.env.NODE_ENV === "development") {
  require("dotenv-safe").config();
}

const app = express();

const configureExpress = () => {
  app.use(logger("dev"));
  app.use(helmet());
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));

  app.get("/hello", (req, res) => res.json("HELLO"));
  app.use("/", routes);
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: err.message });
    next();
  });

  app.database = database;

  return app;
};

module.exports = async () => {
  const app = configureExpress();
  await app.database.connect();
  console.log("Database is running!");

  return app;
};
