// Modules
const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Routers
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const projectsRouter = require("./routes/projects");
const servicesRouter = require("./routes/services");
const contactRouter = require("./routes/contact");

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

// Render home page
app.use("/", indexRouter);

// Render about page
app.use("/", aboutRouter);

// DO: Render projects page

// Do: Render services page

// Render contact page
app.use("/", contactRouter);

// Render under construction page
app.use((req, res) => {
  res.render("under-construction");
});

app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});
