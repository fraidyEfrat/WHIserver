const CourseDal=require("../dal/courseDal");
const Article = require("../models/article");


class CourseController {
getAllCourses = async (req, res) => {
    
    const courses = await CourseDal.getAllCoursesDal({});
    console.log(courses) 
    
    console.log(courses?.length) 
    if (!courses?.length) {
        return res.status(400).json({ message: 'No courses found' })
    }
    return res.json(courses);
}


addNewCourse = async (req, res) => {
    const {lecturer, maxRegisters, cost, numLecture, idsubject, picture, address, minage, maxage,topic } = req.body
    console.log(req.body);
   
    if (!idsubject) {
        console.log("ssssss")
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    console.log(idsubject)
    const course = await CourseDal.addNewCourseDal({lecturer, maxRegisters, cost, numLecture, idsubject, picture, address, minage, maxage,topic  })
    if (course) { 
        return res.status(201).json({ message: 'New course created' })
    } else {
        return res.status(400).json({
            message: 'Invalid course data received'
        })
    }

}
getCourseById = async (req,res)=>{
    const  idcourse = req.params.idcourse
    console.log("getCourseById",idcourse);
    if (!idcourse) {
        return res.status(400).json({ message: 'course ID required' })
    }
    const course =await CourseDal.getCourseByIdDal(idcourse);
    
        if (!course) {
            return res.status(400).json({ message: 'course not found' })
        }
        res.json(course)

}
updateCourseById = async (req, res) => {
    const { idcourse, lecturer, maxRegisters, cost, numLecture, subject, picture, address, minage, maxage,topic } = req.body
    // Confirm data
    
    if (!idcourse) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const course = await CourseDal.updateCourseByIdDal({ idcourse, lecturer, maxRegisters, cost, numLecture, subject, picture, address, minage, maxage,topic } , idcourse )
    if (!course) {
        return res.status(400).json({ message: 'course not found' })
    }
    return res.json(course)
}

 deleteCourseById = async (req, res) => {
    const  idcourse = req.params.idcourse
    console.log("11idcourseidcourseidcourse",idcourse);
    if (!idcourse) {
        return res.status(400).json({ message: 'course ID required' })
    }
    await CourseDal.deleteCourseByIdDal(idcourse);
    console.log("33idcourseidcourseidcourse",idcourse);
    res.json(`course with ID ${idcourse} deleted`)
}

}CourseController

const courseController = new CourseController();
module.exports = courseController;