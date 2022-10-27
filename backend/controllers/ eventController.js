const Event = require('../models/eventModel');
const mongoose = require('mongoose');

//get alll events
const getEvents =  async(req, res) => {
    const events = await Event.find({}).sort({createdAt: 'desc'});
    res.status(200).json(events);
}

//get a single event
const getEvent = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Event not found."})
    }


    const event = await Event.findById(id)
    if (!event) {
        return res.status(404).json({error: "Event not found."})
    } 
    
    res.status(200).json(event);
    
 }

//create an event
const createEvent = async (req,res) => {
    const {name, parentId} = req.body;

    //adding document to db
    try {
        const event = await Event.create({name, parentId});
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({error: error.message})
    } 
    res.json({mssg: 'POST a new event'})
}

//delete an event 

//update en event


module.exports = {
    createEvent,
    getEvents,
    getEvent
}