require('dotenv').config();

const app = require('./app');
const port = 3001;
const host = '127.0.0.1';

const mongoose = require('mongoose');

const dns = require('dns');
dns.setServers(['8.8.8.8']);

const uri = process.env.MONGO_URI;

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('MongoDB Error:', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${port}`);
});