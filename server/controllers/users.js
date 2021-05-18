import Users from "../models/users.js";
export const getUsers = async (req, res) => {
  const users = await Users.find();
  res.status(200).json({
    success: true,
    data: users,
  });
};
export const postUser = async (req, res) => {
  const user = new Users(req.body);
  await user.save();
  res.status(200).json({
    success: true,
    data: user,
  });
};

export const checkUser = async (req, res) => {
  let user = [];
  console.log(req.body);
  user = await Users.find({
    uid: req.body.uid,
    password: req.body.password,
  });
  if (user.length === 0) {
    res.status(200).json({ success: false });
  } else {
    res.status(200).json({ success: true, data: user });
  }
};

export const getUser = async (req, res) => {
  const user = await Users.findById(req.params.id);
  res.status(200).json({ data: user });
};

export const checkpassword = async (req, res) => {
  console.log(req.params.id);
  const user = await Users.findById(req.params.id);
  console.log(req.body);
  if (user.password === req.body.password) {
    res.status(200).json({ succes: true });
  } else {
    res.status(200).json({ succes: false });
  }
};

export const updatepassowrd= async (req,res)=> {
  const user = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.status(200).json({success: true,data: user});
}