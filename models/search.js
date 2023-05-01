const {sequelize,DataTypes} = require('./sequelize');



    const Search = sequelize.define(
        "search",
        {
            idsearch: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            iduser: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            where: {
                type: DataTypes.STRING,
                type:DataTypes.ENUM('GENERAL','COMMUNITY_SHARED_KNOWLEDGE'),
                allowNull: false,
            },
           
            
        },
        {
            timestamps: false,
        }
    );
    module.exports=Search

   
