// src/routes/queueRoutes.js

const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

router.get('/', queueController.getAllQueues);
router.get('/:poliName', queueController.getQueueByPoli);
router.post('/next', queueController.incrementQueue);
router.post('/previous', queueController.decrementQueue);

module.exports = router;
