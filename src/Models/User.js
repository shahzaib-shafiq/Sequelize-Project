
const { sequelize } = require("../dbConfig/dbConfig");
const { DataTypes, Model } = require("sequelize");

class User extends Model { }
User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
        defaultValue: 'S'
    },
},
    {
        // Other model options go here
        sequelize,
        modelName: "User"
    },
);

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
//Sync the Alumni model
// User.sync({ alter: true })
//     .then(() => {
//         console.log("User table updated successfully.");
//     })
//     .catch((err) => {
//         console.error("Error synchronizing User table:", err);
//     });
module.exports = User