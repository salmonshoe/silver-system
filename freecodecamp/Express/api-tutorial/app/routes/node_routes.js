//Routes are wrapped in a function, which takes the Express instance as an argument.
    //Then export this function through the index.js

//When the app receives a POST request (to /notes path) then it will execute the code in callback (res.send() in this case)

module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        //We'll create the note here
        console.log(req.body); //From Postman test, to log out the body the request. Returns 'undefned' bc Express can't process url forms on its own and must use body parser.
        res.send('Post Up');
    })
}