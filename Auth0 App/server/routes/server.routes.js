const controllers = require('../controllers/server.controllers');
const users = require('../models/server.users');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    users.find({}, 'email')
        .then(data => res.json(data))
        .catch(next)
});

router.get('/users/:id', (req, res, next) =>{
    users.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

/*router.post('/users/:id', (req, res , next) => {
    users.findByIdAndUpdate(req.params.id, req.body)
});*/

module.exports = router;