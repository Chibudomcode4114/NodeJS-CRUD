var Farmerdb = require("../model/Farmer");

//create and save new user
exports.create = (req, res) => {
  //Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!!" });
    return;
  }

  //new user
  const user = new Farmerdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
};

//retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {};

//Update a new identified user by user id
exports.update = (req, res) => {};

//Delete a user  with specified user id in the request
exports.delete = (req, res) => {};
