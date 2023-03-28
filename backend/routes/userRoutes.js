const express = require("express");
const { registerUser, authUser } = require("../controllers/Usercontrollers");

const router = express.Router();

// route is used to chain multiple requests
router.route("/").post(registerUser);

// directly adding post request (no chaining can be done here)
router.post("/login", authUser);

module.exports = router;
