var express = require("express");
var router = express.Router();

// Render projects page
router.get("/services", function (req, res, next) {
  res.render("services");
});

module.exports = router;
