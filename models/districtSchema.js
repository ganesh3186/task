const mongoose = require("mongoose");

require("../config");
district = new mongoose.Schema({
  State_Id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'state'
  },
  City_Id:{
    type:String
  },
  City_Name:{
    type:String
  }
 
});
module.exports=mongoose.model("district",district)