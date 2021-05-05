import mongoose from "mongoose";
const DiseaseSchema = mongoose.Schema({
  uid: String,
  category: String,
  disease: String,
  contact: Number,
  symptoms: String,
  recommendations: String,
  suggestions: String,
  dos_date: {
    type: Date,
    default: Date.now,
  },
  pic1: String,
  pic2: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});
const Disease = mongoose.model("Disease", DiseaseSchema);
export default Disease;
