let express = require('express');
let router = new express.Router();

const User = require('mongoose').model('User');
const Circuit = require('mongoose').model('Circuit');

router.get('/circuits', function(req, res) {
  let current_user = req.User;

  res.status(200);
  res.json(current_user.circuits);
});

router.get('/circuit/:circuit_id', function(req, res) {
  circuit_id = req.params.circuit_id;

  let current_user = req.User;

  let circuit = current_user.children.id(_id);

  res.json(circuit);
});

router.post('/circuit', function(req, res) {
  let current_user = req.User;
  let circuit_data = req.body;

  let circuit = current_user.circuits.create(circuit_data);

  current_user.circuits.push(circuit);

  current_user.save(function(err) {
    if (err) {
      res.status(400);
      res.json({error: err});
    } else {
      res.status(201);
      res.json({status: "success"});
    }
  });
});

module.exports = router;
