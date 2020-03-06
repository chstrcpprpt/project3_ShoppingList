const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/Item");

// ROUTES
// GET - return items
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
});

// POST - create items
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    section: req.body.section
  });

  newItem.save()
    .then(item => res.json(item));
});

// DELETE - remove items
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
      .then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;