// Requiring bcrypt for password hashing.
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: DataTypes.INTEGER(12),
            allowNull: true
        },
        address: {
            type: DataTypes.CHAR,
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING(15)
        },
        zip: {
            type: DataTypes.INTEGER(5)
        },
        aboutme: {
            type: DataTypes.TEXT
        }
    });
 
    // Creating a custom method for our User model
    //This will check if an unhashed password entered by the 
    //user can be compared to the hashed password stored in our database

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };


    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    })

    User.addHook("beforeBulkUpdate", function (user) {
        console.log("user-----------------------");
        console.log("+++: user.attributes.password " + user.attributes.password)
        if (user.attributes.password) {
        user.attributes.password = bcrypt.hashSync(user.attributes.password, bcrypt.genSaltSync(10), null)
        }
    })

    return User;
}