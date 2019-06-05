const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); //Parse json data sent from client side to server side
const path = require('path');
const db = require('./db');
const collection = 'todo';

//To connect to the database
db.connect((err)=> {
    if (err) {
        console.log('unable to connect to the database');
        process.exit(1); //Will terminate the application
    }
    else {
        app.listen(3000, ()=>{
            console.log('connected to database, app listening on port 3000');
        });
    }
})