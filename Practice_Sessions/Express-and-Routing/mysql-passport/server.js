const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const PORT = process.env.PORT || 7040;

const db = require('./models');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('Welcome to Passport with Sequelize and without Handlebars');
});

// app.listen(PORT, function() {
//     console.log(`App listening on http://localhost:${PORT}`);
// });
//Listen and show all activities on our terminal, showing what occurs.
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
  