const express = require("express");
const app = express();
const userRoute = require('./src/Routes/userRoute')
const { connectToDatabase } = require("./src/dbConfig/dbConfig");
// const User = require("./src/Models/User");
// const Contact = require("./src/Models/Contact");

const port = process.env.port || 3000;
var bodyParser = require("body-parser");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api', userRoute)

// app.use("/api", userRoute);


app.listen(port, () => {
    console.log(`Sequelize  App listening on port ${port}`);
});
