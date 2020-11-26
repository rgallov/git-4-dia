'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});


router.get('/1', (req, res) => {
    res.send('API TASKS IS GOES HERE') });

module.exports = router;
