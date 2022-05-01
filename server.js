const express = require("express");
const PORT = process.env.PORT || 2000;
const mongoose = require("mongoose");
const DATABASE_URL = "mongod//localhost:27017/wikiDB";
const app = express();

app.use(express.json());

app.get("/", (request, response) => response.send("hello world"));

app.listen(PORT, () => {
  console.info(`Listening in port ${PORT}`);
});
