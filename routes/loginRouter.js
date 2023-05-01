const express = require("express");
const LoginRouter=express.Router();

const loginController=require("../controllers/loginController");
const verifyJWT = require("../middleware/verifyJWT")

LoginRouter.route("/")
    .get(loginController.getAllLogins)
    .post(loginController.addNewLogin);

LoginRouter.route("/:idlogin")
    .delete(loginController.deleteLoginById);


module.exports=LoginRouter;