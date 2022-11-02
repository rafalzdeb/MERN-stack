const { response } = require('express');
const express = require('express');
const { 
    createEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent
} = require('../controllers/ eventController');
const Event = require('../models/eventModel');

const router = express.Router();

//Get all events
router.get('/', getEvents);

//Get a single event
router.get('/:id',  getEvent); 

//Post a single event
router.post('/', createEvent)

//Delete a single event
router.delete('/:id', deleteEvent)


//Update a single event
router.patch('/:id', updateEvent)

module.exports = router;