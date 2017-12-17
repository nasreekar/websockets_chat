var express = require('express'); //its a function we are requiring.
var socket = require('socket.io'); 

// App setup
var app = express(); //express app
var server = app.listen(4000, function(){
    console.log('Listening to requests on port 4000');
}); //node js server

// Static files
app.use(express.static('public'));

// Start working with websockets using socket.io
// Install it on both frontend and backend (client and server) to establish a connection
//socket is a function which takes a parameter ie server on which it wants to run on
var io = socket(server); // we setup io which we required

// listening to a connection
io.on('connection', function(socket){
   console.log('Made a socket connection', socket.id); 
    
    // Listen to incoming chat messages from client
    socket.on('chat', function(data){
        // send it to all the different clients that are connected to the server so that everyone has same content
        io.sockets.emit('chat', data); // referring to all the sockets that connected to server
    });
    
    // Listen to typing message from client
    socket.on('typing', function(data){
       socket.broadcast.emit('typing', data); // socket->individual socket..  emit to every other client but not the original
    });
    
     socket.on('cancel-typing', function() {
        socket.broadcast.emit('cancel-typing');
    });
});