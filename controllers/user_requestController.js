const User_RequestDal=require("../dal/user_requestDal");
const User_Request = require("../models/user_request");
const sendEmail=require('../email')

// @desc Get all articls
// @route GET /aricle
// @access Private

class User_RequestController{

getAllUser_Requests = async (req, res) => {
    console.log("yudtgvdfui")
    const user_requests = await User_RequestDal.getAllUser_RequestsDal();
    console.log(user_requests)
    // If no notes
    if (!user_requests?.length) {
        return res.status(400).json({ message: 'No user_requests found' })
    }

    return res.json(user_requests);

}


getUser_RequestsById = async (req, res) => {
    const iduser_request = req.params.iduser_request;
    console.log(iduser_request)
    const user_request=await User_RequestDal.getUser_RequestsByIdDal(iduser_request);
    console.log()
    // If no notes
    if (!user_request) {
        return res.status(400).json({ message: 'No user_requests found' })
    }

    return res.json(user_request);

   
}

addNewUser_Request = async (req, res) => {
    const { iduser_request,subject, request, response, date, status, iduser } = req.body
    console.log("in addNewUser_Request controller💕💕")
    console.log("iduser_request")
    const UsersEmail=req.user.email;
    console.log(UsersEmail)
    sendEmailToUser(UsersEmail,iduser_request,subject, request, response, date, status, iduser);
    console.log("in addNewUser_Request controller after send email❤️❤️❤️")
    console.log(subject)
    const user_request = await User_RequestDal.addNewUser_RequestDal({ subject, request, response, date, status, iduser})
    if (user_request) { // Created
        return res.status(201).json({ message: 'New user_request created' })
    } else {
        return res.status(400).json({
            message: 'Invalid user_request data received'
        })
    }

}
getUser_RequestsByUserId=async(req,res)=>{
    const iduser=req.user.iduser;
    console.log(iduser)
    const user_requests=await User_RequestDal.getUser_RequestsByUserIdDal(iduser);
    if(!user_requests.length){
        return res.status(400).json({messege:'no user_requests found'})
    }
    return res.json(user_requests);
}

updateUser_RequestById = async (req, res) => {
    const { iduser_request, subject, request, response, date, status, iduser,email} = req.body
    // Confirm data
    const UsersEmail=email;
    console.log("in updateUser_RequestById controller")
    console.log("email")
    console.log(email)

   
    if (!iduser_request) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    // const UsersEmail=email;
    console.log(email)
    sendEmailToUser(UsersEmail,iduser_request,subject, request, response, date, status, iduser);
    const user_request = await User_RequestDal.updateUser_RequestByIdDal({ subject, request, response, date, status, iduser }, iduser_request  )
    if (!user_request) {
        return res.status(400).json({ message: 'user_request not found' })
    }
   res.status(200).json(user_request)
}


deleteUser_RequestById = async (req, res) => {
    const { iduser_request } = req.body
    // Confirm data
    if (!iduser_request) {
        return res.status(400).json({ message: 'article ID required' })
    }
    await User_RequestDal.deleteUser_RequestByIdDal(iduser_request);
    return res.json(`user_request with ID ${iduser_request} deleted`)
}

}

///function
var sendEmailToUser=async(UsersEmail,iduser_request, subject, request, response, date, status, iduser)=>{
    //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",UsersEmail)
    //var initiatorsEmails=initiatorsArr.map(async(initiator)=> {return await initiatorDal.getInitiatorEmailById(initiator)})
    //var UsersEmail = await User_RequestDal.getUsersEmailByIdDal(iduser)///////dal-user
    
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",UsersEmail)
   
    sendEmail(UsersEmail,iduser_request, subject, request, response, date, status, iduser);

}

 const user_requestController=new User_RequestController();
 module.exports= user_requestController;