var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var key = process.env.TestKey; res.render('index', { title: 'Express' + key });
});

module.exports = router;
