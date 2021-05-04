import { text } from 'express';
import mongoose from 'mongoose';
const DiseaseSchema = mongoose.Schema({
  uid: String,
  category: String,
  disease: String,
  contact:Number,
  symptoms: String,
  recommendations: String,
  suggestions:text,
  dos_date: {
    type: Date,
    default: Date.now,
  },
  pic1:String,
  pic2:String
});
const Disease=mongoose.model('Disease',DiseaseSchema);
export default Disease;