const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const port = process.env.port || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new user!');
    socket.on('disconnect', () => {
        console.log('Sorry, but the user just left!');
    });
});

app.use(router);

server.listen(port, ()=> console.log(`Server has started on port ${port}`));
