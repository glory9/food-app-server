// models/Food.js

const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  food_name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: String,
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Food = mongoose.model('food', FoodSchema);