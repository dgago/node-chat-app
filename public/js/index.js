var socket = io();

socket.on("connect", function() {
  console.log("connected to server");

  socket.emit("createEmail", {
    from: "me",
    to: "jen@example.com"
  });
});

socket.on("disconnect", function() {
  console.log("disconnected from server");
});

socket.on("newEmail", function(data) {
  console.log("new email", data);
});

socket.on("newMessage", function(data) {
  console.log("new message", data);
});
