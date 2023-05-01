   const {sequelize,DataTypes} = require('./sequelize');

    const course_register = sequelize.define(
        "course_register",
        {
            idcourseRegister: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            iduser: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idcourse: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            

        },
        {
            timestamps: false,
        }
    );

module.exports=course_register
 
