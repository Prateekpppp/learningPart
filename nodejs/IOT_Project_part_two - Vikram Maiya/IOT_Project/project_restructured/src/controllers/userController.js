// src/controllers/userController.js
const UserModel = require('../models/User');
const mongoose = require('mongoose'); // Import mongoose here

// Reusable function to connect and disconnect from the database
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

exports.findAllUsers = async (request, response) => {
    try {
        const result = await withDatabase(async () => await UserModel.find({}).lean());
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send("Something went wrong");
    }
};

exports.insertUser = async (request, response) => {
    const { fullName, email, password } = request.body;
    try {
        await withDatabase(async () => await UserModel.insertOne({ fullName, email, password }));
        response.status(201).send({ success: true, message: "Signup successful" });
    } catch (error) {
        response.status(500).send({ success: false, message: "Internal server error" });
    }
};

exports.login = async (request, response) => {
    const { email, password } = request.body;
    try {
        const user = await withDatabase(async () => await UserModel.findOne({ email }));
        if (!user || user.password !== password) { // Remember to hash passwords in real apps!
            return response.status(401).send({ success: false, message: "Invalid credentials" });
        }
        response.status(200).send({ success: true, message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        response.status(500).send({ success: false, message: "Internal server error" });
    }
};

exports.updateUser = async (request, response) => {
    const { email, fullName, devices, role } = request.body;
    try {
        await withDatabase(async () => await UserModel.updateOne({ email }, { $set: { fullName, devices, role } }));
        response.send("user doc is updated successfully");
    } catch (error) {
        response.status(500).send("Something went wrong");
    }
};

exports.deleteUser = async (request, response) => {
    const { email } = request.body;
    try {
        await withDatabase(async () => await UserModel.deleteOne({ email }));
        response.status(200).send("User doc is deleted successfully");
    } catch (error) {
        response.status(500).send("Something went wrong");
    }
};