const express = require("express");
const { engine } = require("express-handlebars");
var bodyParser = require("body-parser");

const skills = require("./data/skills.json");

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./build/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("build/public"));

// Sends the homepage
app.get("/", (req, res) => {
  res.render("index", { title: "Joeward Peralta", skills: skills.skills });
});

// Render contact page
app.get("/contact", (req, res, next) => {
  res.render("contact");
});

app.use((req, res) => {
  res.render("under-construction");
});

app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});
