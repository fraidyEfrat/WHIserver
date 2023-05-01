const {sequelize,DataTypes} = require('./sequelize');

   const Subject = sequelize.define(
        "subject",
        {
            idsubject: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

           subject:{
            type:DataTypes.STRING,
            allowNull:false,
            //unique:true
           }
        },
        {
            timestamps: false,
        }
    );

 module.exports=Subject
