// src/routes/deviceRoutes.js
const express = require('express');
const deviceController = require('../controllers/deviceController');
const router = express.Router();

router.post('/insertDevice', deviceController.insertDevice);
router.get('/findAllDevices', deviceController.findAllDevices);
router.delete('/deleteDevice', deviceController.deleteDevice);
router.put('/updateDevice', deviceController.updateDevice);

module.exports = router;