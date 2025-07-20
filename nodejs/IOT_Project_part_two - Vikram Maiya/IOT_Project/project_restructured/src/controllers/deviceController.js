// src/controllers/deviceController.js
const DeviceModel = require('../models/Device');
const mongoose = require('mongoose'); // Import mongoose here

// Reusing the database connection helper
const withDatabase = async (operation) => {
    let connection;
    try {
        connection = await mongoose.connect('mongodb://localhost:27017/iotdb');
        return await operation(connection);
    } catch (error) {
        console.error("Database error:", error);
        throw error;
    } finally {
        if (connection) {
            await connection.disconnect();
        }
    }
};

exports.insertDevice = async (request, response) => {
    const { name, location, topic } = request.body;
    try {
        await withDatabase(async () => await DeviceModel.insertOne({ name, location, topic }));
        response.status(201).send({ success: true, message: "Device added successful" });
    } catch (error) {
        response.status(500).send({ success: false, message: "Internal server error" });
    }
};

exports.findAllDevices = async (request, response) => {
    try {
        const result = await withDatabase(async () => await DeviceModel.find({}).lean());
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send("Something went wrong");
    }
};

exports.deleteDevice = async (request, response) => {
    const { deviceId } = request.body;
    try {
        await withDatabase(async () => await DeviceModel.deleteOne({ _id: deviceId }));
        response.status(200).send("Device doc is deleted successfully");
    } catch (error) {
        response.status(500).send("Something went wrong");
    }
};

exports.updateDevice = async (request, response) => {
    const { deviceId, name, location, topic } = request.body;
    try {
        await withDatabase(async () => await DeviceModel.updateOne({ _id: deviceId }, { $set: { name, location, topic } }));
        response.send("device doc is updated successfully");
    } catch (error) {
        response.status(500).send("Something went wrong");
    }
};