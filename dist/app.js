"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _express = require('express'); var _express2 = _interopRequireDefault(_express);


var _routes = require('./routes/routes'); var _routes2 = _interopRequireDefault(_routes);

var app = _express2.default.call(void 0, );

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));

app.use('/', _routes2.default);

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});

exports. default = app;