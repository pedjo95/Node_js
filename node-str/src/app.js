const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// connecting to db
mongoose.connect(
  "mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=Starter"
);

// loading the model
const Product = require("./models/product");

// loading routes
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
