const express = require("express");
const SearchRouter=express.Router();

const searchController=require("../controllers/searchController");
const verifyJWT = require("../middleware/verifyJWT")

SearchRouter.route("/")
    .get(searchController.getAllSearch)
    .post(searchController.addNewSearch)
    .put(searchController.updateSearchById);

SearchRouter.route("/:idarticle")
    .delete(searchController.deleteSearchById);

// const articleRouter=new ArticleRouter();
module.exports=SearchRouter;

