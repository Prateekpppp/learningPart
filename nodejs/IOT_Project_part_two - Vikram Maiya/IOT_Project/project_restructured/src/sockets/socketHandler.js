// src/sockets/socketHandler.js
const handleSocketConnection = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
        // You can add more socket event handlers here if needed
    });
};

module.exports = { handleSocketConnection };