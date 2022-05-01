const express = require("express");
const PORT = process.env.PORT || 2000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const DATABASE_URL = "mongodb://localhost:27017/wikiDB";
const ArticleSchema = require("./models/articles.js");
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

const Article = mongoose.model("Article", ArticleSchema);

app.get("/v1/api/article", async (request, response) => {
   // const article = Article.find(request.)
});

app.listen(PORT, () => {
  console.info(`Listening in port ${PORT}`);
});
