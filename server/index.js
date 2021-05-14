import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import UserRoute from "./routes/users.js";
import ProfileRoute from "./routes/profile.js";
import DiseaseRoute from "./routes/disease.js";
import MedicineRoute from "./routes/medicines.js";
const app = express();
const MONGO_URI =
"mongodb+srv://pverma42:prathamverma26142@cluster1.mkm8i.mongodb.net/medApp";
  // "mongodb+srv://jatingoyal24:jatingoyal30694@cluster0.bmhzl.mongodb.net/medapp";
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use("/users", UserRoute);
app.use("/profile",ProfileRoute);
app.use("/disease",DiseaseRoute);
app.use("/medicine",MedicineRoute);
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  );
