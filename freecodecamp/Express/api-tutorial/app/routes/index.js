//This will be known as the Master-Route file with indiv. files with indiv. routes.
const noteRoutes = require('./node_routes');

module.exports = function(app, db) {
    noteRoutes(app, db); //Export that route
}