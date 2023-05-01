const {sequelize,DataTypes} = require('./sequelize');

   const Article = sequelize.define(
        "article",
        {
            idarticle: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            idsubject: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rating: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
            users:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
        },
        {
            timestamps: false,
        }
    );

 module.exports=Article
