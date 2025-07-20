// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device', default: [] }]
});

module.exports = mongoose.model('user', userSchema);