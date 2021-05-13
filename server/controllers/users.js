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
  user = await Users.find({
    uid: req.body.uid,
    password: req.body.password,
  });
  if (user.length === 0) {
    res.status(200).json({ success: false });
  } else {
    res.status(200).json({ success: true });
  }
};

export const getUser =async (req,res)=> {
  const user = await Users.findById(req.params.id);
  res.status(200).json({data: user});
}
