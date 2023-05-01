const express = require("express");
const responseArticleRouter=express.Router();

const responseArticleController=require("../controllers/responseArticleController");
const verifyJWT = require("../middleware/verifyJWT")

responseArticleRouter.route("/")
    .get(responseArticleController.getAllResponseArticles)
    .post(verifyJWT,responseArticleController.addNewResponseArticle)
    .put(responseArticleController.updateResponseArticleById);

responseArticleRouter.route("/:id")
    .get(responseArticleController.getAllResponseArticlesById)
    .delete(responseArticleController.deleteresponseArticleById);
    

module.exports=responseArticleRouter;


