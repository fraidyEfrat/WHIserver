const db = require('../models/index')
const CourseRegister = db.course_register
const Course=db.course
const CourseDal = require("./CourseDal");


class CourseRegisterDataAccessor {
getAllCourseRegistersDal = async () => {
    
    const res = await CourseRegister.findAll({});
    return res;
}


addNewCourseRegisterDal = async (iduser, idcourse) => {
  let res=await CourseRegister.create({iduser,idcourse})
  return res; 
}
deletecourseRegisterByIdDal = async (idcourseRegister) => {
   
    await CourseRegister.destroy({
        where: {
            idcourseRegister: idcourseRegister
        }
    })
}
getcourseRegisterByIdcourse=async(idcourse)=>{
    const res=await CourseRegister.findAndCountAll({where:{idcourse:idcourse}});
    return res.count
}
}

const courseRegisterDataAccessor= new CourseRegisterDataAccessor();
module.exports = courseRegisterDataAccessor