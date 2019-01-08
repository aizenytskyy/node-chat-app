var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  $('#messages').append(li);
});

$('#message-form').on('submit', function(e) {
  e.preventDefault();
  console.log('Submit');
  socket.emit(
    'createMessage',
    {
      from: 'USER',
      text: $('[name=message]').val(),
    },
    function(data) {
      console.log('send callback =>', data);
    },
  );
});
