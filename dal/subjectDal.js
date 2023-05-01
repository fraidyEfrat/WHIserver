const db = require('../models/index')
const Subject = db.subject



class SubjectsDataAccessor {

    getAllSubjectDal = async () => {
    const res = await Subject.findAll({});
    return res;

}

addNewSubjectDal = async (req, res) => {
    res=await Subject.create(req);
    return res; 
}

updateSubjectByIdDal = async (data, id) => {
    
    const res = await Subject.update(data, { where: { idsubject: id } })
    return res
}


deleteSubjectByIdDal = async (idsubject) => {
    await Subject.destroy({
        where: {
            idsubject: idsubject
        }
    });
}
}

const subjectsDataAccessor= new SubjectsDataAccessor();
module.exports = subjectsDataAccessor
