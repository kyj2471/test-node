var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET */
router.get('/', function (req, res, next) {
  var name = req.query.name;
  console.log('## get request test');
  console.log(req.query);
  res.render('result_page', {
    title: 'Result',
    name: name,
    method: 'get'
  });
});

/* POST */
router.post('/', function (req, res, next) {
  var name = req.body.name;
  console.log('## post request test');
  console.log(req.body);
  res.render('result_page', {
    title: 'Result',
    name: name,
    method: 'post'
  });
});

module.exports = router;
