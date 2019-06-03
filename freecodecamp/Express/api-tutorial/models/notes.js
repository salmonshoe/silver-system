module.exports = function(sequelize, DataTypes) {
    const Note = sequelize.define('Note', {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    });
    return Note;
}

/*Minimum amount of code needed to create a Sequelize model. Export a function
that takes in 2 variables (sequelize and DataTypes) that are automatically provided
by index.js in models folder. That sequelize variable is the connection to the database
and DataTypes is used to define the type of data this model should be.

In the sequelize.define() method, two arguments are passed in. The name of the model and
the obejct which describes the model's schema. After defining the model, you will have to 
return the object, which is stored inside the Note variable. */