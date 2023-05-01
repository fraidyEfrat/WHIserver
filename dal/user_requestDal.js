const db = require('../models/index')
const User_Request = db.user_request

// @desc Get all articls
// @route GET /aricle
// @access Private

class User_RequestsDataAccessor {

getAllUser_RequestsDal = async () => {
    console.log("rrrrr")
    const res = await User_Request.findAll();
    console.log(res)
    return res;

}

addNewUser_RequestDal = async (req, res) => {
    res=await User_Request.create(req);
    console.log(res);
    return res; 
}
getUser_RequestsByUserIdDal=async(iduser)=>{
    const res=await User_Request.findAll({where:{iduser:iduser}})
    return res
}
getUser_RequestsByIdDal=async(iduser_request)=>{
    let res=await User_Request.findOne({where:{iduser_request:iduser_request}})
    return res
}
// getUsersEmailByIdDal=async (iduser) => {
//     console.log("2222211111111@@@@@@@22!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//     const res='36214264632@mby.co.il'
//     return res
// }

updateUser_RequestByIdDal = async (data, id) => {
    
    const res = await User_Request.update(data, { where: { iduser_request: id } })
    return res
}


deleteUser_RequestByIdDal = async (iduser_request) => {
    await User_Request.destroy({
        where: {
            iduser_request: iduser_request
        }
    });
    
}
}

const user_requestsDataAccessor= new User_RequestsDataAccessor();
module.exports = user_requestsDataAccessor
