module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        'contact',
        {
            // Model attributes are defined here
            permanent_adress: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            current_adress: {
                type: DataTypes.STRING,
                allowNull: false
                // allowNull defaults to true
            },
        },
        {
            // Other model options go here
        },
    );

    //console.log(User === sequelize.models.User); // true
    //Sync the Alumni model
    // Contact.sync({ alter: true })
    //     .then(() => {
    //         console.log("User table updated successfully.");
    //     })
    //     .catch((err) => {
    //         console.error("Error synchronizing User table:", err);
    //     });
    return Contact
}