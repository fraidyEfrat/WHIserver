
   const {sequelize,DataTypes} = require('./sequelize');

   const Community_shared_knowledge = sequelize.define(
        "community_shared_knowledge",
        {
            idcommunity_shared_knowledge: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            idsubject: {
                type: DataTypes.INTEGER,
            },
            description: {
                type: DataTypes.STRING,
            },
            iduser: {
                type: DataTypes.INTEGER,
            },
            counter: {
                type: DataTypes.INTEGER,
            },
           
        },
        {
            timestamps: false,
        }
    );

    module.exports=Community_shared_knowledge
