const express = require("express");
const UserRouter=express.Router();

const userController=require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT")

UserRouter.route("/")
    .get(userController.getAllusers)


UserRouter.route("/:iduser")
    .get(userController.getUserById)


module.exports=UserRouter;