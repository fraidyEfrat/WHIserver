const express = require("express");
const Community_shared_knowledgeRouter=express.Router();

const Community_shared_knowledgeController=require("../controllers/community_shared_knowledgeController");
const verifyJWT = require("../middleware/verifyJWT")

Community_shared_knowledgeRouter.route("/")
    .get(Community_shared_knowledgeController.getAllCommunity_shared_knowledge)
    .post(Community_shared_knowledgeController.addNewCommunity_shared_knowledge)
    .put(Community_shared_knowledgeController.updateCommunity_shared_knowledgeById);

Community_shared_knowledgeRouter.route("/:idcommunity_shared_knowledge")
    .delete(Community_shared_knowledgeController.deleteCommunity_shared_knowledgeById);

module.exports=Community_shared_knowledgeRouter;