const {sequelize,DataTypes} = require('./sequelize');

const Donation = sequelize.define(
        "donation",
        {
            iddonation: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            amount: {
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.STRING,
            },
            iduser:{
                type:DataTypes.INTEGER,
                allowNull:true,
            }
           
        },
        {
            timestamps: false,
        }
    );

    module.exports=Donation

