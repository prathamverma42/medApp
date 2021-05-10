import Disease from '../models/diseases.js';
import mongoose from 'mongoose';
export const postDisease=async (req,res)=>{
    const disease=await Disease.create(req.body);
    res.status(201).json(disease);
}