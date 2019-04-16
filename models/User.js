const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
let salty = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
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

userSchema.pre('save', function (next) {
    // Check if new user or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const user = this;
        bcrypt.hash(user.password, salty,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    user.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

userSchema.methods.isCorrectPassword = function(userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if (err) { 
            cb(err);
        } else {
            cb(err, isMatch);
        }
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;