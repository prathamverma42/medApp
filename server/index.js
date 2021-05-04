import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import route from './routes/users.js';
const app=express();
const MONGO_URI="mongodb+srv://jatingoyal24:jatingoyal30694@cluster0.bmhzl.mongodb.net/medapp";
const PORT=5000;
app.use(express.json());
app.use(cors());
app.use('/',route);
mongoose.connect(MONGO_URI,{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true}).
then(app.listen(PORT, () => {console.log(`server running on port ${PORT}`)
}));

