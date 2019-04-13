const router = require('express').Router();
const exerciseController = require('../../controllers/exerciseController');

router.route('/')
    .get(exerciseController.findAll)
    .post(exerciseController.create);

router.route('/:id')
    .get(exerciseController.findById)
    .put(exerciseController.update);

module.exports = router;