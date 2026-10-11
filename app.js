const express = require('express');

const app = express();

const cors = require('cors');

const router = require('./router');

// CORS middleware
app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// API routes
app.use('/api', router);

module.exports = app;