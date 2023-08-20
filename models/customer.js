
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 80,
    minlength: 3
  },
  contact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
