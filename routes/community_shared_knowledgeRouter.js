const express = require("express");
const Community_shared_knowledgeRouter=express.Router();

const Community_shared_knowledgeController=require("../controllers/community_shared_knowledgeController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");

Community_shared_knowledgeRouter.route("/")
    .get(Community_shared_knowledgeController.getAllCommunity_shared_knowledge)
    .post(verifyJWT,Community_shared_knowledgeController.addNewCommunity_shared_knowledge)
    .put([verifyJWT,verifyJWT_admin],Community_shared_knowledgeController.updateCommunity_shared_knowledgeById);

Community_shared_knowledgeRouter.route("/:idcommunity_shared_knowledge")
    .delete([verifyJWT,verifyJWT_admin],Community_shared_knowledgeController.deleteCommunity_shared_knowledgeById);

module.exports=Community_shared_knowledgeRouter;