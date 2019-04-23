const router = require('express').Router();
const workoutController = require('../../controllers/workoutController');

router.route('/')
    .get(workoutController.findAll)
    .post(workoutController.create);

router.route('/:id')
    .post(workoutController.addExerciseToWorkout)
    .put(workoutController.update)
    .delete(workoutController.remove);

module.exports = router;