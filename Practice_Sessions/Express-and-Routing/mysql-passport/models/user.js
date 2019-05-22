/*Insert our user information to the database using sequelize.
Require bcrypt package to encrypt and decrypt passwords through hashing.*/
const bcrypt = require('bcryptjs');

//Create the User model and export it for server.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    //Compare an unhashed password from the User to the hashed password stored in database
    User.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, this.password);
    };

    User.beforeCreate(user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
};