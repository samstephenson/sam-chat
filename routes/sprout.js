var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect("https://sprout.place/space/4fb8f0343caf4c709952d7726c818590");
});

module.exports = router;
