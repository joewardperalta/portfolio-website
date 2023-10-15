var express = require("express");
var router = express.Router();

// Render projects page
router.get("/projects", function (req, res, next) {
  res.render("projects");
});

router.get("/api/projects", (req, res) => {
  res.send({ data: "Get all projects" });
});

router.get("/api/projects/:id", (req, res) => {
  res.send({ data: `Get One Project ${req.params.id}` });
});

module.exports = router;
