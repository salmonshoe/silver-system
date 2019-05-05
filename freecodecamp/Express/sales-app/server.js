const express = require('express'); 
const exphbs = require('express-handlebars');
const app = express(); // A constructor for Express. It is an instance for an Express application to then make method calls to modify the application.
const PORT = 8080;

//View Engine setup
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');











app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
})