import express from 'express';
import bodyParser from 'body-parser';
import user from './server/routes/user';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Setup a default catch-all route
app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to WEconnect',
}));

app.use('/api/v1/auth', user);

// use port 3000 unless there exists a preconfigured port
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

// Start listening when you are not running under test
export default (!module.parent) ? app.listen(port) : app;
