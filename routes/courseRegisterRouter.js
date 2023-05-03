const express = require("express");
const CourseRegisterRouter=express.Router();

const CourseRegisterController=require("../controllers/courseRegisterController");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");
const verifyJWT = require("../middleware/verifyJWT");


 CourseRegisterRouter.route("/")
      .get([verifyJWT,verifyJWT_admin],CourseRegisterController.getAllCourseRegisters)
      .post([verifyJWT,verifyJWT_admin],CourseRegisterController.addNewCourseRegister);
     
CourseRegisterRouter.route("/:idcourseRegister")
     .delete([verifyJWT,verifyJWT_admin],CourseRegisterController.deletecourseRegisterById);


module.exports=CourseRegisterRouter;