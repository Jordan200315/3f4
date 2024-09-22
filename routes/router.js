const express = require('express');
const chester = express.Router();
const dan = require('../controller/DanController');
chester.get('/', dan.main);
chester.get('/home', dan.home);
chester.get('/about', dan.about);
chester.get('/contact', dan.contact);
chester.get('/services', dan.services);

module.exports = chester;