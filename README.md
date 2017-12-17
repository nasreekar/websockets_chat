# Websockets_Chat
A simple chat application to learn and demostrate websockets

## What are websockets
  * Basically a way to communicate between a client(browser) and server
  * Data flows both ways
  * Allows real time data flow (no ajax requests to display updated data)
  
## Uses
  * multiplayer browser games
  * colloborative code editing
  * online drawing canvas - [Link to my drawing canvas application](https://github.com/nasreekar/drawing_canvas)
  * Real time to-do apps with multiple users
  
## Functionality of the app
Currently as per the code, the app runs on `localhost:4000` while server is running (`node server` in terminal). The app can display a text message if someone is typing to all the other users and can remove it if the user starts erasing it.

## Server Side
The first thing we need to do is create a web socket server. For this we will be using Express app, Node.js and the module Socket.io

## Client Side
I'm using Javascript, Basic HTML files and socket.io as the client side.

## Dependencies
-- save is used to save them to the dependencies
  * Express 
    * `npm install express --save`
  * Socket.io 
    * `npm install socket --save`
  * Nodemon (a convenience dependency but not application dependency - lookout for changes in server side code and restarts the server automatically)
    * `npm install nodemon --save-dev`

## References
This example is developed based on the video tutorial series by [The Net Ninja](https://www.youtube.com/watch?v=vQjiN8Qgs3c&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9)

