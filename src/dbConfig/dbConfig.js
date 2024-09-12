const { Sequelize, DataTypes, Model } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: process.env.DB_PORT || 3306,
    }
);
let connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connecting to DB");
        // Sync the tables here if necessary
        //associations();

        return sequelize; // Return the sequelize instance for further use
    } catch (error) {
        console.error("Unable to connect to the database. Details:", error.message);
        throw error;
    }
};

const dbConnect = async () => {
    try {
        await connectToDatabase();
        console.log("Database connected successfully.");
        //await associations();
        console.log("Associations Created");
    } catch (error) {
        console.error("Failed to connect to database:", error);
    }
};

dbConnect();

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize
db.Contact = require('../Models/Contact')(sequelize, DataTypes)
db.User = require('../Models/User')(sequelize, DataTypes, Model)
sequelize.sync({ force: true })
module.exports = db
