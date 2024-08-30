const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api/userRoutes');
// const mongoose = require('mongoose');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', routes);
    console.log('yoohoo');

db.once('open', () => {    
app.listen(PORT, () => {

    // this creates the clickable link in terminal after starting server
    console.log(`http://localhost:${PORT}`);
});
});