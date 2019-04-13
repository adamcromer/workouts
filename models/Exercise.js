const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }, 
    createdBy: {
        type: String,
        required: true,
        trim: true
    },
    popularity: {
        type: Number,
        trim: true,
        default: 0
    },
    description: {
        type: String, 
        required: true,
        trim: true
    },
    tutorial: {
        type: String,
        trim: true
    },
    type: {
        type: String, // reps or time?
        required: true,
        trim: true, 
        length: {
            type: String,
            required: true,
            trim: true
        }
    }, 
    target: [{
       type: String,
       required: true,
       trim: true 
    }],
    tags: [{
        type: String,
        required: true,
        trim: true
    }]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;