const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
    .post(userController.create);

router.route('/login')
    .post(userController.login);

router.route('/auth')
    .post(userController.auth);

router.route('/:email')
    .get(userController.findByEmail)
    .put(userController.update)
    .delete(userController.remove);

router.route('/create/:id')
    .post(userController.addWorkoutToCreator);

router.route('/add/:id')
    .post(userController.addWorkoutToUser);

module.exports = router;
