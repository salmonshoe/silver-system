//First we want to require all the dependencies needed
const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 7040;
app.use(bodyParser.urlencoded({ extended: true }));

//This is how you will pass the imported routes to your server
require('./app/routes')(app, {})



//Get server running by initializing the express instance. app() must listen to https requests
//sync() is a built-in sequelize method to create tables with the files of models described
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`We are live at http://localhost:${PORT}`);
    });
});

//We will make some CRUD routes. To create, read, update and delete our notes.
//To test the API is to mimic the client-side request. Postman helps make the http request to test out routing.