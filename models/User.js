const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    }, 
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true, 
        validate: {
            validator: function(val) {
                return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }, 
    password: {
        type: String,
        required: true, 
        trim: true
    }, 
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;