//module.exports = (sequelize, DataTypes) => {
    const {sequelize,DataTypes} = require('./sequelize');

   const Course = sequelize.define(
        "course",
        {
            idcourse: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            lecturer: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            maxRegisters: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cost: {
                type:  DataTypes.INTEGER,
                allowNull: false,
            },
            numLecture: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idsubject: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: true
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            minage: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            maxage:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            topic:{
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            timestamps: false,
        }
    );

    //return Course;
//};
module.exports=Course
