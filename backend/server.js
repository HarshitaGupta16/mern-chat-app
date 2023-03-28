const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const path = require("path");
const colors = require("colors");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectDB();

const app = express();

// express js api
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// start our own server
// listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`.yellow.bold));
