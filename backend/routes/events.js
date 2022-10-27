const { response } = require('express');
const express = require('express');
const { createEvent, getEvents } = require('../controllers/ eventController');
const Event = require('../models/eventModel');

const router = express.Router();

//Get all events
router.get('/', getEvents);

//Get a single event
router.get('/:id',  (req, res) => {
    res.json({mssg: 'GET single event'})
})

//Post a single event
router.post('/', createEvent)

//Delete a single event
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an event'})
})

//Update a single event
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an event'})
})


module.exports = router;