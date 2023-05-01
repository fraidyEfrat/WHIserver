   const {sequelize,DataTypes} = require('./sequelize');

    const User_Request = sequelize.define(
        "user_request",
        {
            iduser_request: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            subject: {
                type: DataTypes.STRING,
                
            },

            request: {
                type: DataTypes.STRING,
                
            },
            response: {
                type: DataTypes.STRING,
                
            },
            date: {
                type: DataTypes.STRING,
                
            },
            status: {
                type: DataTypes.STRING,
                
            },
            iduser: {
                type: DataTypes.INTEGER,
                
            },
           
        },
        {
            timestamps: false,
        }
    );
    module.exports=User_Request

