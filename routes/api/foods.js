// routes/api/foods.js

const express = require('express');
const router = express.Router();

// Load Food model
const Food = require('../../models/Food');

// @route GET api/foods/test
// @description tests foods route
// @access Public
router.get('/test', (req, res) => res.send('food route testing!'));

// @route GET api/foods
// @description Get all foods
// @access Public
router.get('/', (req, res) => {
  Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(404).json({ nofoodfound: 'No Foods found' }));
});

// @route GET api/foods/:id
// @description Get single food by id
// @access Public
router.get('/:id', (req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(404).json({ nofoodfound: 'No Food found' }));
});

// @route GET api/food
// @description add/save food
// @access Public
router.post('/', (req, res) => {
  Food.create(req.body)
    .then(food => res.json({ msg: 'Food added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this food' }));
});

// @route GET api/foods/:id
// @description Update food
// @access Public
router.put('/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body)
    .then(food => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/foods/:id
// @description Delete food by id
// @access Public
router.delete('/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, req.body)
    .then(food => res.json({ mgs: 'Food entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a food' }));
});

module.exports = router;