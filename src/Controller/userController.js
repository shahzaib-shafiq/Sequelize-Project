const db = require('../dbConfig/dbConfig');
const User = db.User;

const addUser = async (req, res) => {
    try {
        // Create a new user instance
        const jane = User.build({ firstName: "SS", lastName: "DS" });
        //console.log(jane.firstName)
        // Save to the database
        await jane.save();

        // Log the instance after converting it to a plain object
        console.log(jane.toJSON());

        // Respond with the saved user data as JSON
        res.status(200).json(jane.toJSON()); // Use `json()` instead of `JSON()`
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Unable to save user to the database.' });
    }
};

module.exports = { addUser };
