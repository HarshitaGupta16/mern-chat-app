const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// accessing or creating the chat
// protect middleware is used so that if user not logged in then they cannot access this route
router.route("/").post(protect, accessChat);

// get all the chat for the particular logged in user
router.route("/").get(protect, fetchChats);

// creating group chat
router.route("/group").post(protect, createGroupChat);

// renaming the group chat
router.route("/rename").put(protect, renameGroup);

// add someone to the group
router.route("/groupadd").put(protect, addToGroup);

// remove someone from group or leave group
router.route("/groupremove").put(protect, removeFromGroup);

module.exports = router;
