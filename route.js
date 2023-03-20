const express = require("express");
const State = require("./controller/stateController");
const Dist = require("./controller/districtController");
const Taluka = require("./controller/TalukaController");
const Village = require("./controller/villageController");
const UserLogin = require("./controller/UserLoginController");
const Farmer = require("./controller/farmerController");
const crop = require("./controller/CropController");
const MobileOpt=require("./controller/MobileOptController")
const router = express.Router();

router.get("/state", State.getPosts);

// router.post("/dist", Dist.createPosts);
// router.post("/taluka", Taluka.createPosts);
// router.post("/village", Village.createPosts);
// router.post("/list", State.getPosts);
// router.post("/list/dist", Dist.getPosts);
// router.post("/list/tal", Taluka.getPosts);
// router.post("/list/village", Village.getPosts);
// router.post("/userLogin", UserLogin.createPosts);
// router.post("/list/userlogin", UserLogin.getPosts);
// router.post("/farmer", Farmer.createPosts);
// router.post("/list/farmer", Farmer.getPosts);
// router.post("/crop", crop.createPosts);
// router.post("/list/crop", crop.getPosts);
// router.post("/mobileOpt", MobileOpt.createPosts);
// router.post("/list/MobileOpt", MobileOpt.getPosts);

module.exports = router;
