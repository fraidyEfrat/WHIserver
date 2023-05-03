const express = require("express");
const responseArticleRouter=express.Router();

const responseArticleController=require("../controllers/responseArticleController");
const verifyJWT = require("../middleware/verifyJWT")
const verifyJWT_admin=require("../middleware/verifyJWT_admin");

responseArticleRouter.route("/")
    .get(responseArticleController.getAllResponseArticles)
    .post(verifyJWT,responseArticleController.addNewResponseArticle)
    .put([verifyJWT,verifyJWT_admin],responseArticleController.updateResponseArticleById);

responseArticleRouter.route("/:id")
    .get(responseArticleController.getAllResponseArticlesById)
    .delete([verifyJWT,verifyJWT_admin],responseArticleController.deleteresponseArticleById);
    

module.exports=responseArticleRouter;


