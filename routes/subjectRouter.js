const express = require("express");
const SubjectRouter=express.Router();

const subjectController=require("../controllers/subjectController");
const verifyJWT = require("../middleware/verifyJWT")

SubjectRouter.route("/")
    .get(subjectController.getAllSubject)
    .post(subjectController.addNewSubject)
    .put(subjectController.updateSubjectById);

SubjectRouter.route("/:idsubject")
    .delete(subjectController.deleteSubjectById);


module.exports=SubjectRouter;