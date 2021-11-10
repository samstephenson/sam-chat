var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect(
    "https://us04web.zoom.us/j/7400709203?pwd=SDdhWC9jRll2NzNGdnllbEFCdkcvUT09"
  );
});

module.exports = router;
