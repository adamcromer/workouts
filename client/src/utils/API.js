import axios from 'axios';

export default {
    getAllExercises: function() {
        return axios.get('/api/exercise');
    },
    getOneExercise: function(id) {
        console.log("getOneExercise loaded");
        return axios.get('api/exercise/' + id);
    },
    getAllWorkouts: function() {
        return axios.get('/api/workouts');
    },
    getOneWorkout: function(id) {
        return axios.get('api/workout/' + id);
    },
    findUser: function(userEmail) {
        return axios.get('/api/user/' + userEmail);
    },
    saveExercise: function(exerciseData) {
        return axios.post('/api/exercise', exerciseData);
    },
    saveWorkout: function(workoutData) {
        return axios.post('/api/workouts', workoutData);
    },
    addWorkoutToCreator: function(id, workoutData) {
        return axios.post('/api/user/create/' + id, workoutData);
    },
    addWorkoutToUser: function(id, workoutId) {
        return axios.post('/api/user/add/' + id, workoutId);
    },
    addExerciseToWorkout: function(id, exerciseID) {
        return axios.post('/api/workout/' + id, exerciseID);
    },
    saveUser: function(userData) {
        return axios.post('/api/user', userData);
    },
    deleteExercise: function(id) {
        return axios.delete('/api/exercises' + id);
    },
    deleteWorkout: function(id) {
        return axios.delete('/api/workouts' + id);
    },
    deleteUser: function(id) {
        return axios.delete('/api/user' + id);
    }
}