var express = require("express");
var router = express.Router();

// Render contact page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Joeward Peralta" });
});

module.exports = router;
