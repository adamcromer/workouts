const path = require('path');
const router = require('express').Router();
const userRoutes = require('./user');
const exerciseRoutes = require('./exercises');
const workoutRoutes = require('./workouts');

router.use('/user', userRoutes);

router.use('/workout', workoutRoutes);

router.use('/exercise', exerciseRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
