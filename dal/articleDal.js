const db = require('../models/index')
const{Op}=require('sequelize')
const Article = db.article

// @desc Get all articls
// @route GET /aricle
// @access Private

class ArticlesDataAccessor {

getAllArticlesDal = async () => {
    const res = await Article.findAll({});
    return res;

}

addNewArticleDal = async (req, res) => {
    res=await Article.create(req);
    console.log("addNewArticleDal",res,"addNewArticleDal");
    return res; 
}

updateArticleByIdDal = async (data, id) => {
    
    const res = await Article.update(data, { where: { idarticle: id } })
    return res
}


deleteArticleByIdDal = async (idarticle) => {
    await Article.destroy({
        where: {
            idarticle: idarticle
        }
    });
}
getArticleByIdDal=async(idarticle)=>{
    let res=await Article.findOne({where:{idarticle:idarticle}})
    return res
}
getArticlesBySearchDal=async(keyWord)=>{
    return await Article.findAll({
        where:
        {
            content:{[Op.like]:`%${keyWord}%`},
          
        }
     })
}


}

const articlesDataAccessor= new ArticlesDataAccessor();
module.exports = articlesDataAccessor


// [Op.or]:[{name:{[Op.like]:`%${keyWord}%`}},
//             {company:{[Op.like]:`%${keyWord}%`}}]