const db = require('../models/index')
const User = db.user
const ResponseArticle = db.responseArticle




class ResponseArticleDataAccessor {

    getAllResponseArticlesDal = async () => {
        console.log("reeee!!!!!!!eeee");
        const res = await ResponseArticle.findAll({});
        return res;
    }
    getAnswerByIdUSerAndIDArticleDal= async (idarticle,iduser)=>{
        console.log("4444444444");
        console.log(idarticle,"444444444455555555",iduser);
        const res =await ResponseArticle.findAll({
            where: {
                idarticle: idarticle,
                iduser: iduser
            }
          });
          //console.log(res,"6666666");
        return res;
    }
    addNewResponseArticleDal = async (req, res) => {
        console.log("addNewResponseArticleDal eeeeeeeee");
        res = await ResponseArticle.create(req);
        console.log("addNewResponseArticleDal eeeeeeeee");

        return res;
    }
        
    updateResponseArticleByIdDal = async (data,id) => {
       
        const res = await ResponseArticle.update(data, {where: { idresponse: id } })
        return res;
    }
    getAllResponseArticlesByIdDal= async(id)=>{
        console.log("reeeeeeee");
        const res = await ResponseArticle.findAll({
            where:{idarticle: id}, 
          
        })
        // joinnnnnnn
        // const res = await ResponseArticle.findAll({
        //     where:{idarticle: id}, 
        //     include: {
        //     model: User,
        //     }
        // })
        console.log("res");
        console.log(res);
        console.log("res");
    
        return res;
    }
    deleteresponseArticleByIdDal = async (id) => {
       
        await ResponseArticle.destroy({
            where: {
                idresponse: id
            }
        });
        
    }
}
const responseArticleDataAccessor= new ResponseArticleDataAccessor();
module.exports = responseArticleDataAccessor