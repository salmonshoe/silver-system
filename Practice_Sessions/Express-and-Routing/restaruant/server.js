//Set the dependencies you will need
const express = require('express');
const path = require('path');

//Set up the variables necessary for use
const app = express();
const PORT = process.env.PORT || 7999;

//Set up the middleware Express app to handle data parsing. Used for POST and PUT methods
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set some data. Ideally you would want to module.exports this table data
const place = require('./data');
    // console.log(place.data)


//Get your routing straightened out to send the user first to the AJAX page.
//Write it out with the 'get' method, following with the URL and 
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (request, response) => {
    response.sendFile(path.join(__dirname, 'add.html'));
});

app.get('/view-table', (request, response) => {
    response.sendFile(path.join(__dirname, 'view-table.html'));
});

app.get('/api-tables', (req, res) => {
    res.json(place.data);
});

// Start the server to listen for client requests.
app.listen(PORT, (error)=> {
    if (error) throw error;
    console.log(`Server listening on http://localhost:${PORT}`);
}) 