
const mongoose=require("mongoose");
require("../config")
UserLogin=new mongoose.Schema({
    FO_ID: String,
    ZONE_ID: String,
    D_ID: String,
    HQ_ID: String,
    FO_NAME: String,
    MOBILE_NO:String,
    PROFILE_PHOTO: String,
    TOKEN: String,
    FO_EMP_CODE: String,
    ZONE_NAME: String,
    D_NAME: String,
    HQ_NAME: String,
    STATUS: String,
    REG_DATE:String ,
    EMAIL:String,
    MAC_ADDRESS:String,
    LAST_LOGIN: String
})
module.exports=mongoose.model("userlogin",UserLogin)