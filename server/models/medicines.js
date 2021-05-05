import mongoose from "mongoose";
const MedicinesSchemm = mongoose.Schema({
  uid: String,
  medname: String,
  company: String,
  expdate: {
    type: Date,
    default: Date.now,
  },
  qty: Number,
  type: String,
  options: String,
  mrp: Number,
  oprice: Number,
  mode: String,
  city: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});
const Medicines = mongoose.model("Medicines", MedicinesSchemm);
export default Medicines;
