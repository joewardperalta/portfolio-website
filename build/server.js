// Modules
const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Api
const projectsRouter = require("./api/projects");

// Express app
const app = express();
const HTTP_PORT = process.env.PORT || 3000;

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("build/public"));

/*********************** Routes ***********************/

// Redirect to home page
app.get("/", (req, res) => {
  res.redirect(301, "/home");
})

// Render home page
app.get("/home", (req, res) => {
  res.render("index", { title: "Joeward Peralta" });
});

// Render about page
app.get("/about", (req, res) => {
  res.render("about");
});

// Render contact page
app.get("/contact", (req, res, next) => {
  res.render("contact");
});

// Render projects page
app.get("/projects", (req, res, next) => {
  res.render("projects");
});

app.use(projectsRouter);

// TODO: Use router from services api

// Render under construction page
app.use((req, res) => {
  res.render("under-construction");
});

app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});
