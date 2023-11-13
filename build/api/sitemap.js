var express = require("express");
var router = express.Router();

// Render about page
router.get("/sitemap.xml", function (req, res, next) {
    res.sendFile('sitemap.xml');
});

module.exports = router;
