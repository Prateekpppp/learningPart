// src/models/Device.js
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    topic: { type: String, required: true }
});

module.exports = mongoose.model('device', deviceSchema);