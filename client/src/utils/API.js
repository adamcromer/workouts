import axios from 'axios';

export default {
    getAllExercises: function() {
        return axios.get('/api/exercises');
    },
    getAllWorkouts: function() {
        return axios.get('/api/workouts');
    },
    findUser: function(userData) {
        return axios.get('/api/user', { params: { userData: userData } });
    },
    saveExercise: function(exerciseData) {
        return axios.post('/api/exercises', exerciseData);
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