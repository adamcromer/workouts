const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Exercise
      .find(req.query)
      .sort({ _id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Exercise
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTitle: function (req, res) {
    let regexTerm = new RegExp(req.params.term, 'i')
    console.log(regexTerm);
    db.Exercise
      .find({ title: regexTerm })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTags: function (req, res) {
    db.Exercise
      .find({ tags: { $in: [/req.query/i] } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Exercise
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Exercise
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
