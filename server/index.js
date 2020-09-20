const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const {addUser, removeUser, getUser, getUsersRoom} = require('./users');

const port = process.env.port || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new user!');
    socket.on('join', ({name,room}, callback)=>{  
        const {error, user} = addUser({id:socket.id, name, room});
        if(error) return callback(error);

        socket.emit('Message', {user:'admin', text:`${user.name}, Welcome to ${user.room}`});
        socket.broadcast.to(user.room).emit('Message', {user:'admin', text: `${user.name} has joined the ${user.room}`});
        socket.join(user.room);

        callback();
    });

    socket.on('SendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('Message', {user:user.name, text: message});

        callback();
    });

    socket.on('disconnect', () => {
        console.log('Sorry, but the user just left!');
    });
});

app.use(router);

server.listen(port, ()=> console.log(`Server has started on port ${port}`));
