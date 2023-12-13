var express = require("express");
var router = express.Router();
var projects = require("../data/projects.json")

router.get("/api/projects", (req, res) => {
  res.status(200).json(projects);
});

router.get("/api/projects/:id", (req, res) => {
  res.send({ data: `Get One Project ${req.params.id}` });
});

module.exports = router;
