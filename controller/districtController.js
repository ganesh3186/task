require("../config");

const district = require("../models/districtSchema");

const createPosts = async (req, res) => {
  console.log(req.body);
  try {
    let data = await district.create({
      State_Id: req.body.State_Id,
      City_Id: req.body.City_Id,
      City_Name: req.body.City_Name,
    });
    data = await data.save();
    console.log(data);
    return res.status(200).send("Data saved succesfully");
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
const getPosts = async (req, res) => {
  try {
    if ({ State_Id: req.body["ID1"] }) {
      let data = await district.find({ State_Id: req.body["ID1"] });
      return data = res.status(200).send({
        ResponseCode: 0,
        ResponseMessage: req.body["GET_DATA"],
        Opt: null,
        Static_Opt: null,
        Data: data,
        Data1: [{ Coloumn1: 1 }],
      });
   
    }
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
module.exports = { createPosts, getPosts };
