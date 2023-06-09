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
getAllUser_RequestsByStatusDal=async(status)=>{
    const res=await User_Request.findAll({where:{status:status}})
    
    return res
}

getUser_RequestsByUserIdAndSortDal=async(iduser,sortOrder)=>{
    const res=await User_Request.findAll({where:{iduser:iduser}})
    if(sortOrder==-1){
        console.log("desc");
        res.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));}
    else{console.log("acc");
        res.sort((a,b) => Date.parse(a.date) -Date.parse(b.date));//; {Date.parse(a.date)>Date.parse(b.data)?console.log(Date.parse(a.date)):console.log(Date.parse(b.date))}
}
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
