export const getSender = (loggedUser, users) => {
  // return the user which are not logged in
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  // return the user which are not logged in
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

// it will take all of the messages, current message, index of the current message, loggedIn user's Id
// export const isSameSender = (messages, m, i, userId) => {
//   return (
//     if index doesn't exceed the array length then procees
//     i < messages.length - 1 &&
//     if the next message sender id is not equal to current message sender id
//     (messages[i + 1].sender._id !== m.sender._id ||
//       if next message is not undefined then proceed
//       messages[i + 1].sender._id !== undefined) &&
//     it is other then the logged in user bcz then only we will display profile pic
//     messages[i].sender._id !== userId
//   );
// };

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

// it will take all the messages, current index, user id of logged in user
// check if it is the last message of opposite user then the user not logged in
export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

// return the margin according to sender and receiver
export const isSameSenderMargin = (messages, m, i, userId) => {
  // if same sender is there who is logged in then return 33 margin
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

// if index is more than 0 and the sender id of previous message is equal to the current message sender id so it will return true
export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
