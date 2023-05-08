const express = require("express");
const User_RequestRouter=express.Router();

const user_requestController=require("../controllers/user_requestController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");

User_RequestRouter.route("/")
    .get([verifyJWT,verifyJWT_admin],user_requestController.getAllUser_Requests)
    .post(verifyJWT,user_requestController.addNewUser_Request);

User_RequestRouter.route("/ByUserID/:sortOrder")
    .get(verifyJWT,user_requestController.getUser_RequestsByUserIdAndSort)//verifyJWT, 

User_RequestRouter.route("/Status/:status/:sortOrder")
    .get(user_requestController.getAllUser_RequestsByStatus)

User_RequestRouter.route("/:id")
    .get([verifyJWT,verifyJWT_admin],user_requestController.getUser_RequestsById)
    .delete(verifyJWT,user_requestController.deleteUser_RequestById)
    .put([verifyJWT,verifyJWT_admin],user_requestController.updateUser_RequestById);
// const articleRouter=new User_RequestRouter();
module.exports=User_RequestRouter;