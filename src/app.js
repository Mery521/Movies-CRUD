const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config/config');
const routes = require('./api/routes');
const port = config.port || 5000;
require('mysql');
const app = express();

// parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: true }))

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options('*', cors());

// set security HTTP headers
app.use(helmet());

// v1 api routes
app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Connected');
});

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});