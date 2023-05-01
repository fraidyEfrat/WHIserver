const {sequelize}=require("./sequelize")

const applyExtraSetup=()=>{
    const{ user,user_request,login,article,response_article, course, course_register, community_shared_knowledge, donation, search}=sequelize.models
    user_request.belongsTo(user, { foreignKey: "iduser", as: "user", onDelete:"cascade", onUpdate:"cascade"});
    community_shared_knowledge.belongsTo(user, { foreignKey: "iduser", as: "useruser", onDelete:"cascade", onUpdate:"cascade"});
    //login.belongsTo(user, { foreignKey: "iduser", as: "user", onDelete:"cascade", onUpdate:"cascade"});
    //user.belongsTo(login, { foreignKey: "idlogin", as: "user", onDelete:"cascade", onUpdate:"cascade"});
    response_article.belongsTo(user, { foreignKey: "iduser", as: "userr", onDelete:"cascade", onUpdate:"cascade"});
    response_article.belongsTo(article, { foreignKey: "idarticle", as: "user", onDelete:"cascade", onUpdate:"cascade"});
    course_register.belongsTo(user, { foreignKey: "iduser", as: "user", onDelete:"cascade", onUpdate:"cascade"});
    community_shared_knowledge.belongsTo(user, { foreignKey: "iduser", as: "user", onDelete:"cascade", onUpdate:"cascade"});
    search.belongsTo(user, { foreignKey: "iduser", as: "user", onDelete:"cascade", onUpdate:"cascade"});
}

module.exports={applyExtraSetup}