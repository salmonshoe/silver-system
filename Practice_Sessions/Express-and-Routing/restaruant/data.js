var rafael = {
    name:'Raf',
    number: '1112223333',
    email: 'raf@email.com',
    identifier: 'deeznuts'
};

var virginia = {
    name: 'Virginia',
    number: '2223334444',
    email: 'virginia@gmail.com',
    identifier: 'whatwhat'
}

let tables = [];
tables.push(rafael, virginia); //The problem is that this line is not dynamic code once a new table is posted
module.exports.data = tables;