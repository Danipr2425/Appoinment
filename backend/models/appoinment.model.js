module.exports = (sequelize,Sequelize) => {
    const Appoinment = sequelize.define("appoinment",{
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        day:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        time:{
            type: Sequelize.STRING,
            allowNull: false,
        }

    });
    return Appoinment;
};