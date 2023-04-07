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
const server = app.listen(
  PORT,
  console.log(`Server Started on Port ${PORT}`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

//this will create a connection
io.on("connection", (socket) => {
  console.log("connected to socket.io");

  // everytime user opens the app, he/she should be connected to their personel socket
  // creating a new socket where frontend will send some data and will join a room
  // this callback func will take user data from frontend i.e userData
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  // When we click on any of the chat this will create a new room with that particular user and the logged in user
  // or when other person joins add him to this particular room
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      // if I am sending message, I should not receive it, others should recevie it so return
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message received", newMessageReceived);
    });
  });
});
