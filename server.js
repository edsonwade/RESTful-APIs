const express = require("express");
const PORT = process.env.PORT || 2000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const DATABASE_URL = "mongodb://localhost:27017/wikiDB";
const articlesRouter = require("./router/articles.js");
const app = express();

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

app.set("view engine", "ejs");

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.use("/api/v1/articles", articlesRouter);

app.listen(PORT, () => {
  console.info(`Listening in port ${PORT}`);
});
