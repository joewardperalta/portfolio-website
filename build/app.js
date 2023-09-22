const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./build/views");

// Sends the homepage
app.get("/", (req, res) => {
  res.render("index", { layout: false });
});

app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});
