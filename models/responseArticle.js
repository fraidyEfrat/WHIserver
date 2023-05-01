const {sequelize,DataTypes} = require('./sequelize');

    const ResponseArticle = sequelize.define(
        "response_article",
        {
            idresponse: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            date: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            idarticle: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            rating:{
                type: DataTypes.FLOAT,
            },
            iduser: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
            
        },
        {
            timestamps: false,
        }
    );

  module.exports=ResponseArticle