const express = require('express');

const {kembalikan} = require('../controller/kembalikanController.js');
const router = express.Router();

router.get('/kembalikan', kembalikan);

module.exports = {
    routes: router
}