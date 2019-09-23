'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _user = require('./server/routes/user');

var _user2 = _interopRequireDefault(_user);

var _businesses = require('./server/routes/businesses');

var _businesses2 = _interopRequireDefault(_businesses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerDocument = require('./swagger.json');

var upload = (0, _multer2.default)();
var app = (0, _express2.default)();
app.set('view engine', 'ejs');

// parsing application/json
app.use(_bodyParser2.default.json());
// parsing application/xwww-
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// parsing multipart/form-data
app.use(upload.array());

app.use('/api/v1/auth', _user2.default);
app.use('/api/v1/businesses', _businesses2.default);

// Document API with Swagger
app.use('/api/doc', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(swaggerDocument));

// use port 3000 unless there exists a preconfigured port
var port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

// Added by Jan Svec: static routes
app.use('/', _express2.default.static(__dirname + '/template'));

// Added by Jan Svec: commented default re-route
// // Setup a default catch-all route
// app.get('*', (req, res) => res.status(200).send({
// 	message: 'Welcome to WEconnect',
// }));

// Start listening when you are not running under test
exports.default = !module.parent ? app.listen(port) : app;