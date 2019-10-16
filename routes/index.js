var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.download(`${__dirname}/../public/files/luke.xlsx`)
})

module.exports = router;
