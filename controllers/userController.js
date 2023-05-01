const UserDal=require("../dal/userDal");
const User = require("../models/user");
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken')

// @desc Get all articls
// @route GET /aricle
// @access Private

class UserController{
getAllusers = async (req, res) => {
    const users = await UserDal.getAllusersDal();
    console.log(users);

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' });
    }
    return res.json(users);

}
getUserById=async (req, res) => {
    const user = await UserDal.getUserByIdDal(req.params.iduser);
    console.log(user);

    if (!user) {
        return res.status(400).json({ message: 'No user found' });
    }
    return res.json(user);

}

}


const userController=new UserController();
module.exports= userController;