const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');

router.get('/default_circuits', function(req, res) {
  let db = mongoose.connection.db;

  db.collection('default_circuits').find().toArray(function(err, circuits) {
    res.json(circuits);
  });
});

router.get('/default_circuits/:circuit_name', function(req, res) {
  let db = mongoose.connection.db;
  let circuit_name = req.params.circuit_name;

  db.collection('default_circuits').findOne({
    name: circuit_name
  }).then(function(circuit) {
    res.json(circuit)
  });
});

module.exports = router;
