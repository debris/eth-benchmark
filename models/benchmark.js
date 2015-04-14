var mongoose = require('mongoose');

var Benchmark = new mongoose.Schema({
    device: String,
    result: Number
});

module.exports = mongoose.model('benchmark', Benchmark);

