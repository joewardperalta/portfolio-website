var express = require("express");
var router = express.Router();

// Render projects page
router.get("/", function (req, res, next) {
  res.render("projects");
});

module.exports = router;
