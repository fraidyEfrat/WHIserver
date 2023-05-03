const express = require("express");
const SubjectRouter=express.Router();

const subjectController=require("../controllers/subjectController");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");
const verifyJWT = require("../middleware/verifyJWT");

SubjectRouter.route("/")
    .get(subjectController.getAllSubject)
    .post([verifyJWT,verifyJWT_admin],subjectController.addNewSubject)
    .put([verifyJWT,verifyJWT_admin],subjectController.updateSubjectById);

SubjectRouter.route("/:idsubject")
    .delete([verifyJWT,verifyJWT_admin],subjectController.deleteSubjectById);


module.exports=SubjectRouter;