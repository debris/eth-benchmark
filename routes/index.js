var express = require('express');
var router = express.Router();
var Benchmark = require('../models/benchmark');

/* GET home page. */
router.get('/', function(req, res, next) {
  Benchmark.find({}).sort({result: -1}).limit(5).exec(function (err, benchs) {
    res.render('index', { 
        title: 'Ethereum',
        number: 5,
        results: benchs
    });
  });
});

router.post('/benchmark', function (req, res, next) {
    console.log(req.body);
    var raw = req.body.params[0];
    var result = req.body.params[1];
    Benchmark.create({
        device: raw,
        result: result
    }, function (err, bench) {
        if (err) {
            res.send(400, err)
            console.error(err);
            return
        }
        Benchmark.count({result: {"$gt": result}}, function (err, count) {
            res.send(200, {id: 1, result: count+1, jsonrpc: '2.0'});
        });
    });
});

module.exports = router;
