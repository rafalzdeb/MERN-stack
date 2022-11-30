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
    if (await isIdValid(id)){
        const event = await Event.findById(id);
        res.status(200).json(event);
    } else {
        return res.status(404).json({error: "Event not found."})
    }
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
}

//delete an event 
const deleteEvent = async(req,res) => {
    
    const {id} = req.params
    if (await isIdValid(id)){
        const event = await Event.findById(id).deleteOne();
        res.status(200).json(event);
    } else {
        return res.status(404).json({error: "Event not found."})
    }
}

//update en event
const updateEvent = async (req,res) => {
    
    const {id} = req.params
    if (await isIdValid(id)){
        const event = await Event.findById(id).updateOne({_id: id}, {...req.body});
        res.status(200).json(event);
    } else {
        return res.status(404).json({error: "Event not found."})
    }
}

const isIdValid = async (id) => {
    
    if(mongoose.Types.ObjectId.isValid(id)){
        const event = await Event.findById(id);
        return event? true : false;
    } else {
        return false;
    }
}

module.exports = {
    createEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent
}