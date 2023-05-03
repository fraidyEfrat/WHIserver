const express = require("express");
const UserRouter=express.Router();

const userController=require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");

UserRouter.route("/")
    .get([verifyJWT,verifyJWT_admin],userController.getAllusers)


UserRouter.route("/:iduser")
    .get([verifyJWT,verifyJWT_admin],userController.getUserById)


module.exports=UserRouter;