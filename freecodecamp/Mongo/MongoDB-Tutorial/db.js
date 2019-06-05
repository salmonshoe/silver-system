    //Where we will connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
    //Give the database a name
const dbName = 'crud_mongodb';
const url = 'mongodb://localhost:27017'; //default location of where your MongoDb would be located on your local machine
const mongoOptions = {useNewUrlParse: true};

const state = {
    db: null
};

const connect = (cb) => {
    if (state.db)
        cb();
        else{
            MongoClient.connect(url, mongoOptions, (err, client) => {
                if(err)
                    cb(err);
                else {
                    state.db = client.db(dbName);
                    cb();
                }
            });
        }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

const getDB = () => {
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};