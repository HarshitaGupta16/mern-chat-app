const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const path = require("path");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectDB();

const app = express();

app.use(express.json()); // to accept json data
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// express js api
app.get("/", (req, res) => {
  res.send("API is running");
});

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// start our own server
// listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`.yellow.bold));
