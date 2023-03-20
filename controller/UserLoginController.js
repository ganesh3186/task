const UserLogin = require("../models/UserLoginSchema");
require("../config");
const createPosts = async (req, res) => {
  try {
    let data = new UserLogin(req.body);
    data = await data.save();
    return res.status(200).send("Data Saved Successfully");
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
const getPosts = async (req, res) => {
  try {
    if ({ MOBILE_NO: req.body["MOBILE_NO"] }) {
      let data = await UserLogin.find({ MOBILE_NO: req.body["MOBILE_NO"] });
      return data = res.status(200).send({
        ResponseCode: 0,
        ResponseMessage: "Success....!",
        ID: null,
        url1: null,
        url2: null,
        Data: data,
        Data1: null,
      });
      
    }
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
module.exports = { createPosts, getPosts };
