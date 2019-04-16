import axios from 'axios';

export default {
    getAllExercises: function(id) {
        return axios.get('/api/exercise' + id);
    },
    getAllWorkouts: function(id) {
        return axios.get('/api/workouts' + id);
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