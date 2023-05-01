const SubjectDal=require("../dal/subjectDal");
const Subject = require("../models/subject");

class SubjectController{

getAllSubject = async (req, res) => {
    
    const subjects = await SubjectDal.getAllSubjectDal({});
    console.log(subjects) 
    
    console.log(subjects?.length) 
    if (!subjects?.length) {
        return res.status(400).json({ message: 'No subjects found' })
    }
    return res.json(subjects);
}


 addNewSubject = async (req, res) => {
    const {idsubject,subject } = req.body
    console.log(req.body);
   
    if (!subject) {
        console.log("ssssss")
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    console.log(subject)
    const mySubject = await SubjectDal.addNewSubjectDal({idsubject,subject })
    if (mySubject) { 
        return res.status(201).json({ message: 'New subject created' })
    } 
        return res.status(400).json({
            message: 'Invalid subject data received'
        })

}

 updateSubjectById = async (req, res) => {
    const { idsubject,subject } = req.body
    // Confirm data
    
    if (!idsubject) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const mySubject = await SubjectDal.updateSubjectByIdDal({idsubject,subject  } , idsubject )
    if (!mySubject) {
        return res.status(400).json({ message: 'subject not found' })
    }
    return res.json(mySubject)
}

 deleteSubjectById = async (req, res) => {
    const  idsubject = req.params.idsubject

    if (!idsubject) {
        return res.status(400).json({ message: 'subject ID required' })
    }
    await SubjectDal.deleteSubjectByIdDal(idsubject);
    res.json(`subject with ID ${idsubject} deleted`)
}


}


const subjectController=new SubjectController();
module.exports= subjectController;

