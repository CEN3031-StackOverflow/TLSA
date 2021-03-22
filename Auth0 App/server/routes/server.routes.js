const controllers = require('../controllers/server.controllers');
const users = require('../models/server.users');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    users.find({}, 'email')
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;