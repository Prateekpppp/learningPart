// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/findAllUsers', userController.findAllUsers);
router.post('/insertUser', userController.insertUser);
router.post('/login', userController.login);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);

module.exports = router;