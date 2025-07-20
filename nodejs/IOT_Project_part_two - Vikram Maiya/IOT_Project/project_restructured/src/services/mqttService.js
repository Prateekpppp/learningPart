// src/services/mqttService.js
const { connectMQTT } = require('../config/mqtt');

let client;
let io; // Will be set from app.js

const initializeMQTT = (socketIO) => {
    io = socketIO;
    client = connectMQTT();

    client.on('connect', () => {
        console.log('Connected to MQTT broker');
        client.subscribe('GATEWAY1/#');
    });

    client.on('message', (topic, value) => {
        const timestamp = new Date().toISOString();
        const message = {
            topic: topic,
            value: Number(value),
            timestamp: timestamp,
        };
        if (io) {
            io.emit("live_sensor_updates", message);
        } else {
            console.log("Socket.IO not initialized, cannot emit MQTT message.");
        }
    });

    client.on('error', (error) => {
        console.error('MQTT error:', error);
    });
};

module.exports = { initializeMQTT };