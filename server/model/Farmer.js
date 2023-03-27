const mongoose = require("mongoose");
var schema = new mongoose.Schema();

const farmerSchema = new Schema({
  name: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  temperatureOfLocation: {
    type: Number,
    required: true,
  },
  precipitationLevel: {
    type: String,
    required: true,
  },
  yearsOfexperience: {
    type: Number,
    required: true,
  },
  typeOffarm: {
    type: String,
    required: true,
  },
  gender: String,
  status: String,
});

const Farmerdb = mongoose.model("farmerdb", schema);
module.exports = Farmerdb;
