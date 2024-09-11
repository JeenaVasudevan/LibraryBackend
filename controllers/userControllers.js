const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllUser=async(req, res) => {
    const users= await User.find({});
    res.json(users)
     }
const getUserById=async(req, res) => {
    const user=await User.findById(req.params.userId).exec();
    res.json(user)
    }
const addUser=async(req, res) => {
    const data= req.body
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const user=new User({
        ...data,
        password:hash,
    })
    await user.save()
    res.json(user)
  }
const updateUser=async(req, res) =>{if(req.user._id === req.params.userId || req.user.role === 'admin') {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    res.json(updatedUser)
}
else {
    res.status(401).send("Unauthorized access!")
}}

const deleteUser=async(req, res) => {
    const deletedUser=await User.findByIdAndDelete(req.params.userId)
    res.send("deleted")
    }

module.exports={
    getAllUser,getUserById,addUser,updateUser,deleteUser
}