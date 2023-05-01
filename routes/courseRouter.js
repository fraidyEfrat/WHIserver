const express = require("express");
const CourseRouter=express.Router();

const courseController=require("../controllers/courseController");
const verifyJWT = require("../middleware/verifyJWT")

CourseRouter.route("/")
    .get(courseController.getAllCourses)
    .post(verifyJWT,courseController.addNewCourse)
    .put(courseController.updateCourseById);

CourseRouter.route("/:idcourse")
    .delete(courseController.deleteCourseById);


module.exports=CourseRouter;