'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);

  socket.on('file-error', (payload) => {
    console.log('ERROR:', payload);
    socket.broadcast.emit('err', payload);
  });

  socket.on('file-save', (payload) => {
    console.log('SUCCESS:', typeof payload);
    socket.broadcast.emit('success', payload);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected', socket.id);
  });

});

