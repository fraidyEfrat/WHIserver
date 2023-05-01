const db = require('../models/index')
const User = db.user

// @desc Get all articls
// @route GET /aricle
// @access Private

class UserDataAccessor {
getAllusersDal = async () => {
    const res = await User.findAll({});
    return res;

}
getUserByIdDal= async (id) => {
    console.log("ddd:",id);
    const res = await User.findOne({where:{iduser:id}});
    console.log(res);
    return res;

}

}
const userDataAccessor=new UserDataAccessor()
module.exports = userDataAccessor;
