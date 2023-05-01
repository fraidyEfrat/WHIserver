const express = require("express");
const ArticleRouter=express.Router();

const articleController=require("../controllers/articleController");
const verifyJWT = require("../middleware/verifyJWT")

ArticleRouter.route("/search")
    .get(articleController.getArticleBySearch)

ArticleRouter.route("/")
    .get(articleController.getAllArticles)
    .post(verifyJWT,articleController.addNewArticle)
    .put(articleController.updateArticleById)
    .get(articleController.getArticesBySubject);

ArticleRouter.route("/:idarticle")
    .get(articleController.getArticleById)
    .delete(articleController.deleteArticleById);


// const articleRouter=new ArticleRouter();
module.exports=ArticleRouter;


