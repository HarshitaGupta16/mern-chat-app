const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/Usercontrollers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// route is used to chain multiple requests
// it has to go through the protect middleware before moving to allUsers
router.route("/").post(registerUser).get(protect, allUsers);

// directly adding post request (no chaining can be done here)
router.post("/login", authUser);

module.exports = router;
