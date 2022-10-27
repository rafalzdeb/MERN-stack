const Event = require('../models/eventModel');

//get alll events
const getEvents =  async(req, res) => {
    const events = await Event.find({}).sort({createdAt: desc});
    res.status(200).json(events);
}

//get a single event

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
    getEvents
}