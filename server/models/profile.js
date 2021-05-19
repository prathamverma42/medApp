import mongoose from "mongoose";
const ProfileSchema = mongoose.Schema({
  uname: String,
  name: String,
  gender: String,
  dob: Date,
  address: String,
  city: String,
  state: String,
  pin: String,
  email: String,
  acard: Number,
  ppic: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    // unique: true,
  },
});
const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
