import Medicines from '../models/medicines.js';

export const postmedicine = async (req,res) => {
    const medicine = await Medicines.create(req.body);
    res.status(200).json({success: true,data: medicine});
}
export const getmedicine = async(req, res)=> {
    const medicines = await Medicines.find({user: req.body.id});
    res.status(200).json(medicines);
}
export const getDistinctCity_BuyMedicine = async (req,res)=> {
    const cities = await Medicines.collection.distinct("city");
    res.status(200).json({data: cities});
}
export const getDistinctMedicine_BuyMedicine=async (req,res)=>{
    console.log(req.body.city);
    const cities=await Medicines.inventory.distinct("medname",  {city:req.body.city});
    res.status(200).json({data: cities});
}
