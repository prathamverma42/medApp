import mongoose from 'mongoose';
const ProfileSchema = mongoose.Schema({
  uid: String,
  uname: String,
  gender: String,
  dob:Date, 
  address: String,
  city: String,
  pin: String,
  email:String,
  contact:Number,
  acard:Number,
  ppic:String
});
const Profile=mongoose.model('Profile',ProfileSchema);
export default Profile;