import mongoose from "mongoose";
const UsersSchema = mongoose.Schema({
  uid: String,
  password: String,
  mobile: Number,
  status: {
    type: Number,
    default: 1,
  },
});
const Users = mongoose.model("Users", UsersSchema);
export default Users;
