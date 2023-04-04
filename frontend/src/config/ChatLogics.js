export const getSender = (loggedUser, users) => {
  // return the user which are not logged in
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  // return the user which are not logged in
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
