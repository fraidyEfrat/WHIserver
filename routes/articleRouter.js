const express = require("express");
const ArticleRouter=express.Router();

const articleController=require("../controllers/articleController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");

ArticleRouter.route("/search")
    .get(articleController.getArticleBySearch);

ArticleRouter.route("/")
    .get(articleController.getAllArticles)
    .post([verifyJWT,verifyJWT_admin],articleController.addNewArticle)
    .put([verifyJWT,verifyJWT_admin],articleController.updateArticle)
    .get(articleController.getArticesBySubject);//????

ArticleRouter.route("/:idarticle")
    .get(articleController.getArticleById)
    .delete([verifyJWT,verifyJWT_admin],articleController.deleteArticleById);//


// const articleRouter=new ArticleRouter();
module.exports=ArticleRouter;


