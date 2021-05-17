 
import Disease from "../models/diseases.js";

export const postDisease = async (req, res) => {
  const disease = await Disease.create(req.body);
  res.status(201).json({ success: true, data: disease });
};

export const getDistinctCategory = async (req, res) => {
  const categories = await Disease.collection.distinct("category");
  res.status(200).json({ data: categories });
};

export const getDistinctDiseasesByCategory = async (req, res) => {
  // console.log(req.body);
  const diseases = await Disease.distinct("diseasename", {
    "category": req.body.category 
  });
  res.status(200).json({ data: diseases });
};

export const getdiseasesinfo = async (req,res)=>{
  // console.log(req.body);
  const diseases = await Disease.find({"category": req.body.category, "diseasename": req.body.diseasename});
  res.status(200).json({data: diseases});
}