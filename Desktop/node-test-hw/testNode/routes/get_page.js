var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('get_page', { title: 'GET-test' });
});

module.exports = router;
