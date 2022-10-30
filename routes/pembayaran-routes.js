const express = require('express');

const {pembayaran} = require('../controller/pembayaranController.js');
const router = express.Router();

router.get('/pembayaran', pembayaran);

module.exports = {
    routes: router
}