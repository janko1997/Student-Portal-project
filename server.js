const express = require('express');
const socket = require('socket.io');
const helmet = require('helmet');

// App setup
const app = express();
const server = app.listen(9000, function() {
  console.log('Listening on port 9000');
});

app.use(express.static('All'));
app.use(helmet());

// socket setup
const io = socket(server);

const chatRoom = [];

io.on('connection', function(socket) {
  console.log('made socket connection', socket.id);

  socket.on('chat', function(data) {
    chatRoom.push(data);
    io.sockets.emit('chat', chatRoom);
  });

  socket.on('chatRoomRequest', function(data) {
    io.to(data).emit('chat', chatRoom);
  });
});
