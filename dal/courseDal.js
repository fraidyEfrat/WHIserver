const db = require('../models/index')
const Course = db.course


class CourseDataAccessor{
 getAllCoursesDal = async () => {
    const courses = await Course.findAll({});
   return courses;
}


 addNewCourseDal = async (req,res) => {
    
    res = await Course.create(req)
    return res;

}

updateCourseByIdDal = async (data, id) => {
    const res = await Course.update(data, { where: { idcourse: id }})
    return res
}

 deleteCourseByIdDal = async (idcourse) => {
   
    await Course.destroy({
        where: {
            idcourse: idcourse
        }
    });
    }
    getMaxRegistersByIdDal=async(idcourse)=>{
        const course=await Course.findOne({where:{idcourse:idcourse}, attributes: ['maxRegisters'] });
        var res = course.dataValues.maxRegisters
        return res
    }
    


}
const courseDataAccessor= new CourseDataAccessor();
module.exports = courseDataAccessor
