// front end socket.io connection which makes a connection with backend

// Make connection
var socket = io.connect('http://localhost:4000'); // we have access to io variable from the socket.io library we loaded in html file.

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback= document.getElementById('feedback');

// start an event when send button is clicked
btn.addEventListener('click', function(){
   socket.emit('chat', {
       message: message.value,
       handle: handle.value
   }); // emit function takes two parameters i.e name of the message and 2nd parameter what the actual data we are sending to server (in this case we are sending an object) 
    message.value =""; 
});

// adding event listener to message field when someone is typing
message.addEventListener('keyup', function() {
    if (message.value.length === 0) {
        socket.emit('cancel-typing');
    } else {
        socket.emit('typing', handle.value);
    }
});

// Listen for chat events from the server
socket.on('chat', function(data){
    feedback.innerHTML = "";
   output.innerHTML += '<p><strong>'+data.handle+':</strong>' + data.message + '</p>'; 
});

// listen for incoming typing message event
socket.on('typing',function(data){
   feedback.innerHTML = '<p><em>'+data+' is typing... </em></p>'; 
});

socket.on('cancel-typing', function(data) {
    feedback.innerHTML = "";
});