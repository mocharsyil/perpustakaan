const express = require('express');

const {pinjam} = require('../controller/pinjamBukuController.js');
const router = express.Router();

router.get('/pinjam', pinjam);

module.exports = {
    routes: router
}