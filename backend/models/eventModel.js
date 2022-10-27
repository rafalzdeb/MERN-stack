//import mongoose from 'mongoose';
//const { Schema } = mongoose;

const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type:String,
        required: true
    },

    parentID: {
        type: mongoose.ObjectId,
        default: null,
    }
    
}, {timestamps: true})

module.exports = mongoose.model("Event", eventSchema);
