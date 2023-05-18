const express = require("express");
const CourseRouter=express.Router();

const courseController=require("../controllers/courseController");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");
const verifyJWT = require("../middleware/verifyJWT");

CourseRouter.route("/")
    .get(courseController.getAllCourses)
    .post([verifyJWT,verifyJWT_admin],courseController.addNewCourse)
    .put([verifyJWT,verifyJWT_admin],courseController.updateCourseById);

CourseRouter.route("/:idcourse")
    .delete(courseController.deleteCourseById);


module.exports=CourseRouter;