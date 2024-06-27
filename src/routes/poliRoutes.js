// src/routes/poliRoutes.js

const express = require('express');
const router = express.Router();
const poliController = require('../controllers/poliController');

router.get('/', poliController.getAllPolis);
router.post('/', poliController.createPoli);

module.exports = router;
