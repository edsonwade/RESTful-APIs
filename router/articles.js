const express = require("express");
const router = express.Router();
const Article = require("../models/articles.js");

//GET ROUTE - FIND ALL Articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//GET ARTICLES BY ID
router.get("/:id", getArticle, async (req, res) => {
  res.json(res.article);
});

router.post("/create", async (req, res) => {
  /** need validation here */

  try {
    const articles = await new Article({
      title: req.body.title,
      content: req.body.content,
    });
    articles.save();
    res.status(201).json({ message: " created article with success." });
  } catch (error) {
    res.status(400).json({ message: "cannot create an article." });
  }
});

async function getArticle(req, res, next) {
  let article;
  try {
    article = await Article.findById(req.params.id);
    if (article == null)
      return res.status(404), json({ message: "cannot find article." });
  } catch (error) {
    res.status(500).json({ message: "The ID select was not found." });
  }
  res.article = article;
  next();
}

module.exports = router;
