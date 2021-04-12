const controllers = require('../controllers/server.controllers');
const users = require('../models/server.users');
const events = require('../models/server.events');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    users.find({}, 'email given_name family_name points')
        .then(data => res.json(data))
        .catch(next)
});

router.get('/users/:id', (req, res, next) => {
    users.findById(req.params.id, 'email given_name family_name points')
        .then(data => res.json(data))
        .catch(next)
});

router.get('/users/name/:name', (req, res, next) => {
    users.find({$or: [
        {given_name: { $eq: req.params.name }},
        {family_name: { $eq: req.params.name }}
    ]}, 'email given_name family_name points')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/users/:id/inc', (req, res, next) => {
    var pnt;
    users.findByIdAndUpdate(req.params.id, { $inc: { points: 1 } })
        .then(data => res.json(data))
        .catch(next)
});

router.post('/users/:id/reset', (req, res, next) => {
    var pnt = 0;
    users.findByIdAndUpdate(req.params.id, { points: pnt }, { new: true, select: 'points' })
        .then(data => res.json(data))
        .catch(next)
});

router.post('/events/new', (req, res, next) => {
    console.log(req.body.googleId);
    var newEvent = new events({ googleId: req.body.googleId, attending: [] });
    newEvent.save()
        .then(data => res.json(data))
        .catch(next)
});

router.post('/events/attend', (req, res, next) => {
    events.findOneAndUpdate({ googleId: req.body.googleId }, { $addToSet: { attending: req.body.userId } })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;