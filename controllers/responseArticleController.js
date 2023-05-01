const responseArticleDal = require("../dal/responseArticleDal");
const ArticleDal=require("../dal/articleDal");
const ResponseArticle = require("../models/responseArticle");
const { FLOAT } = require("sequelize");



const getAllResponseArticles = async (req, res) => {
console.log("fffffffffffff");
    const responseArticle = await responseArticleDal.getAllResponseArticlesDal();
    if (!responseArticle?.length) {
        return res.status(400).json({ message: 'No responseArticle found' })
    }
    return res.json(responseArticle);
}
const addNewResponseArticle = async (req, res) => {
    console.log("1111111111");
    const iduser=req.user.iduser;
    const {date, content, idarticle,rating } = req.body
    console.log("addNewResponseArticle   addNewResponseArticleaddNewResponseArticle");
    console.log("222222222");
    console.log(req.body);
    console.log("33333333");
    if (!idarticle) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
//יש לבדוק האם כבר קיים למשתמש זה למאמר זה תגובה אם כן שלא יתן!!
    //console.log("allResponseArticleByID1");
    // const allResponseArticleByID=await responseArticleDal.getAllResponseArticlesByIdDal(idarticle)
    // console.log("allResponseArticleByID2",allResponseArticleByID);
    // console.log(iduser);
    // const chekIfResponseExists =allResponseArticleByID.filter((res)=>{res.iduser==iduser})
    // console.log("chekIfResponseExists",chekIfResponseExists);
    console.log(idarticle,"444444444455555555",iduser);
    const AnswerByIdUSerAndIDArticleDal=await responseArticleDal.getAnswerByIdUSerAndIDArticleDal(idarticle,iduser)
    console.log("7777777");
    console.log("getAnswerByIdUSerAndIDArticleDal",AnswerByIdUSerAndIDArticleDal);
    console.log("AnswerByIdUSerAndIDArticleDal.length",AnswerByIdUSerAndIDArticleDal.length)
    if(AnswerByIdUSerAndIDArticleDal.length>0){
        return res.status(400).json({
            message: 'Invalid responseArticle => Each user can respond once on each article'
        })
    }

    const responseArticle = await responseArticleDal.addNewResponseArticleDal({ date, content, idarticle, iduser,rating  })

    console.log("addNewResponseArticle =>eeeeeeeeeeeeeeeeeeeeeeee");
    
    if (responseArticle) {
        const boolSuccess=updateRating(rating,idarticle);
        if(boolSuccess)
            return res.status(201).json({ message: 'New responseArticle created' })
    } else {
        return res.status(400).json({
            message: 'Invalid responseArticle data received'
        })
    }

}
const updateResponseArticleById = async (req, res) => {
    const { idresponse, date, content, idarticle, iduser,rating } = req.body

    if (!idresponse) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const responseArticle = await responseArticleDal.updateResponseArticleByIdDal({ date, content, idarticle, iduser,rating }, idresponse)
    if (!responseArticle) {
        return res.status(400).json({ message: 'responseArticle not found' })
    }
    res.json(responseArticle)
}
const getAllResponseArticlesById =async (req,res) =>{
    console.log("eeeeeeeeeeeeeeeeee");
    const idarticle = req.params.id
    console.log(idarticle);
    if (!idarticle) {
        return res.status(400).json({
            message: 'idarticle is required'
        })
    }
    const responseArticle = await responseArticleDal.getAllResponseArticlesByIdDal(idarticle);
    if (!responseArticle?.length) {
        return res.status(400).json({ message: 'No responseArticle found' })
    }
    return res.json(responseArticle);
    
    
}

const deleteresponseArticleById = async (req, res) => {
    const  idresponse  = req.params.id

    if (!idresponse) {
        return res.status(400).json({ message: 'responseArticle ID required' })
    }
    await responseArticleDal.deleteresponseArticleByIdDal(idresponse);
    res.json(`responseArticle with ID ${idresponse} deleted`)
}

module.exports = {
    getAllResponseArticles,
    addNewResponseArticle,
    updateResponseArticleById,
    getAllResponseArticlesById,
    deleteresponseArticleById,
}


var updateRating = async (rating,idarticle)=>{
    console.log("console.log(rating);",rating);
    const findBYIDarticle = await ArticleDal.getArticleByIdDal(idarticle);
    console.log("findBYIDarticle",findBYIDarticle);
    const res=null;
    if (!findBYIDarticle) {
        return false
    }
    console.log("cccccccccccccccccc");
    const c_rating=findBYIDarticle.rating;
    console.log("cccccccccccccccccc",c_rating);
    var users=findBYIDarticle.users;
    console.log("cccccccccccccccccc",users);
    var calculate=users * c_rating;
    console.log("cccccccccccccccccc",calculate);
    users=users+1;
    console.log("cccccccccccccccccc",users);
    calculate+=rating;
    console.log("cccccccccccccccccc",calculate);
    calculate/=users;
    console.log("cccccccccccccccccc",calculate);
    rating=calculate;
    const articleUpdate = await ArticleDal.updateArticleByIdDal({ rating,users }, idarticle  )

    if (!articleUpdate) {
        return false;
    }
    return true;
}
//גיבוי לשינוי שלא מחזיר res אלא מחזיר ערך בולאני
// var updateRating = async (rating,idarticle)=>{
//     console.log("console.log(rating);",rating);
//     const findBYIDarticle = await ArticleDal.getArticleByIdDal(idarticle);
//     console.log("findBYIDarticle",findBYIDarticle);
//     const res=null;
//     if (!findBYIDarticle) {
//         return res.status(400).json({ message: 'article in ResponseArticleController in addNewResponseArticle not found' })
//     }
//     console.log("cccccccccccccccccc");
//     const c_rating=findBYIDarticle.rating;
//     console.log("cccccccccccccccccc",c_rating);
//     var users=findBYIDarticle.users;
//     console.log("cccccccccccccccccc",users);
//     var calculate=users * c_rating;
//     console.log("cccccccccccccccccc",calculate);
//     users=users+1;
//     console.log("cccccccccccccccccc",users);
//     calculate+=rating;
//     console.log("cccccccccccccccccc",calculate);
//     calculate/=users;
//     console.log("cccccccccccccccccc",calculate);
//     rating=calculate;
//     const articleUpdate = await ArticleDal.updateArticleByIdDal({ rating,users }, idarticle  )

//     if (!articleUpdate) {
//         return res.status(400).json({ message: 'article not found' })
//     }
//     res.status(200);
// }


