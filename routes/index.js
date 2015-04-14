var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/benchmark', function (req, res, next) {
    console.log(req.body);
    res.send(200, {id: 1, result: 1, jsonrpc: '2.0'});
});

module.exports = router;
