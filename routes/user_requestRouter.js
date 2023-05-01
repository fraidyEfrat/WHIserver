const express = require("express");
const User_RequestRouter=express.Router();

const user_requestController=require("../controllers/user_requestController");
const verifyJWT = require("../middleware/verifyJWT")

User_RequestRouter.route("/")
    .get(user_requestController.getAllUser_Requests)
    .post(verifyJWT,user_requestController.addNewUser_Request);

User_RequestRouter.route("/iduser/tt")
    .get( verifyJWT, user_requestController.getUser_RequestsByUserId)

User_RequestRouter.route("/:id")
    .get(user_requestController.getUser_RequestsById)
    .delete(user_requestController.deleteUser_RequestById)
    .put(user_requestController.updateUser_RequestById);
// const articleRouter=new User_RequestRouter();
module.exports=User_RequestRouter;