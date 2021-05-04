import Profile from '../models/profile.js';
export const createProfile=async(req,res)=>{
    const profile=await Profile.create(req.body);
    res.status(200).json(profile);

}
export const updateProfile=async(req,res)=>{
    const profileupdate=await Profile.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(profileupdate);
}
export const getProfile=async (req,res)=>{
    const getProfile=await Profile.findById(req.params.id);
    res.status(200).json(getProfile);
}