const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const path = require("path");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectDB();

const app = express();

app.use(express.json()); // to accept json data

// express js api
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

// start our own server
// listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`.yellow.bold));
