const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Workout
        .find(req.query)
        .sort({ popularity: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Workout
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findByTitle: function(req, res) {
    db.Workout
        .find({ title: /req.query/i })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findByTime: function(req, res) {
    db.Workout
        .where('duration')
        .gte(req.query * 0.8)
        .lte(req.query * 1.2)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findByDiff: function(req, res) {
    db.Workout
        .find({ difficulty: req.query })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findByTags: function(req, res) {
    db.Workout
        .find( { tags: { $in: [/req.query/i] } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Workout
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workout
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
      db.Workout
        .findById(req.params.id)
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  addExerciseToWorkout: function (req, res) {
    db.Workout
      .findOneAndUpdate(
        { _id: req.params.id }, 
        { $push: { exercises: req.body.id } }, 
        { new: true }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
