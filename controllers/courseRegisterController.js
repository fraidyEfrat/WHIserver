const CourseRegisterDal = require("../dal/CourseRegisterDal");
const CourseDal = require("../dal/CourseDal");
const Course = require('../models/index')

const getAllCourseRegisters = async (req, res) => {

    const courseRegisters = await CourseRegisterDal.getAllCourseRegistersDal();
    console.log(courseRegisters)

    console.log(courseRegisters?.length)
    if (!courseRegisters?.length) {
        return res.status(400).json({ message: 'No CourseRegisters found' })
    }
    return res.json(courseRegisters);
}


const addNewCourseRegister = async (req, res) => {
    const { iduser, idcourse } = req.body
    console.log(req.body);

    if (!iduser || !idcourse) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const maxRegisters=await CourseDal.getMaxRegistersByIdDal(idcourse);
    const numRegisters=await CourseRegisterDal.getcourseRegisterByIdcourse(idcourse);
    console.log("now")
    console.log(maxRegisters)
    console.log(numRegisters)
    if(numRegisters>=maxRegisters){
        return res.status(400).json({
            message: 'course is full, canot register'
        })
    }
    const courseRegister = await CourseRegisterDal.addNewCourseRegisterDal(iduser, idcourse)
    
    if (courseRegister) {
        return res.status(201).json({ message: 'New CourseRegister' })

    } else {
        
        return res.status(400).json({
            message: 'Invalid CourseRegister data received'
        })
    }
}
const deletecourseRegisterById = async (req, res) => {
    const  idcourseRegister  = req.params.idcourseRegister
    // Confirm data
    console.log(req.body);
    if (!idcourseRegister) {
        return res.status(400).json({ message: 'courseRegister ID required' })
    }
    await CourseRegisterDal.deletecourseRegisterByIdDal(idcourseRegister);
    res.json(`course with ID ${idcourseRegister} deleted`)
}

module.exports = {
    getAllCourseRegisters,
    addNewCourseRegister,
    deletecourseRegisterById,
}
