"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _math = require('../math');

const router = _express2.default.Router();
const math = new (0, _math.Math)();

router.get('/sum', function (req, res, next) {
    console.log('sum');
    res.send(math.sum(2, 3).toString());
});

router.get('/sub', function (req, res, next) {
    console.log('sub');
    res.send(math.sub(2, 3).toString());
});

router.get('/mult', function (req, res, next) {
    console.log('mult');   
    res.send(math.mult(2, 3).toString());
});


exports. default = router;