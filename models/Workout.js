const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
    tags: [{
        type: String,
        required: true,
        trim: true
    }],
    target: [{
        type: String,
        required: true,
        trim: true
    }],
    difficulty: {
        type: Number,
        trim: true
    },
    duration: {
        type: Number,
        trim: true
    },
    popularity: {
        type: Number,
        trim: true,
        default: 0
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;