import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import multer from 'multer';

import user from './server/routes/user';
import businesses from './server/routes/businesses';

const swaggerDocument = require('./swagger.json');

const upload = multer();
const app = express();
app.set('view engine', 'ejs');

// parsing application/json
app.use(bodyParser.json());
// parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// parsing multipart/form-data
app.use(upload.array());

app.use('/api/v1/auth', user);
app.use('/api/v1/businesses', businesses);

// Document API with Swagger
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// use port 3000 unless there exists a preconfigured port
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

// Added by Jan Svec: static routes
app.use('/', express.static(__dirname + '/template'));

// Added by Jan Svec: commented default re-route
// // Setup a default catch-all route
// app.get('*', (req, res) => res.status(200).send({
// 	message: 'Welcome to WEconnect',
// }));

// Start listening when you are not running under test
export default (!module.parent) ? app.listen(port) : app;
