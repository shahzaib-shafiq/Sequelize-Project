const express = require("express");
const app = express();

const { connectToDatabase } = require("./src/dbConfig/dbConfig");
const User = require("./src/Models/User");
const Contact = require("./src/Models/Contact");


const port = process.env.port || 3000;
var bodyParser = require("body-parser");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

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

// app.use("/api", userRoute);


app.listen(port, () => {
    console.log(`Sequelize  App listening on port ${port}`);
});
