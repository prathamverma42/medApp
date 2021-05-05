
import Profile from "../models/profile.js";
import Users from "../models/users.js";

export const createProfile = async (req, res) => {
  req.body.user = req.params.id;
  const checkuid = await Users.findById(req.params.id);
  if (checkuid !== null) {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } else {
    res.status(404).json("Useer not exist");
  }
};

export const updateProfile = async(req,res)=> {

    const updatedprofile = await Profile.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedprofile);
