import mongoose from "mongoose";
import Profile from "../models/profile.js";
import Users from "../models/users.js";

export const createProfile = async (req, res) => {
  // req.body.user = req.params.id;
  // const checkuid = await Users.findById(req.params.id);
  // if (checkuid !== null) {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({success: true});
  // } else {
  //   res.status(404).json("Useer not exist");
  // }
};

export const updateProfile = async(req,res)=> {

    const updatedprofile = await Profile.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedprofile);
}

export const getProfilebyId=async(req,res)=>{
  const getprofile=await Profile.find({user:mongoose.Types.ObjectId(req.params.id)});
  // console.log(getprofile[0].dob);
  // let dob = getprofile[0].dob;
  // let arr = dob.split('T');
  // console.log(arr);
  // getprofile.dob=dob[0];
  res.status(201).json(getprofile);
}
export const getCityById = async (req,res)=>{
  const profile = await Profile.find({user: req.body.id});
  res.status(200).json({data: profile});
}

export const getDistinctCityById=async(req,res)=>{
  const city=await Profile.find({user:req.body.id});
  res.status(200).json({data:city});
}

export const getCityByID_PostMedicine = async ( req,res)=> {
  // console.log(req.body.id);
  const profile = await Profile.find({user:req.body.id});
  res.status(200).json({city: profile[0].city});
}