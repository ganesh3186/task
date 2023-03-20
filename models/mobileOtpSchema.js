const mongoose = require("mongoose");
require("../config");
const MobileOpt = new mongoose.Schema({
  ResponseCode: String,
  ResponseMessge: String,
  User_Otp: String,
  Master_Otp: String,
});
module.exports=mongoose.model("mobileOtp",MobileOpt)