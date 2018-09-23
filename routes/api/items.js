const { Router } = require('express');
const router = Router({});

//Item model
const Item = require('../../models/Item');

/**
 * @route  GET api/items
 * @desc   Get all items
 * @access Public 
 */
//Since we're using the middleware to catch everything from api/items, we are already there now so no need to get('/api...)
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 }) //sort>> -1 descending 1 ascending
    .then(items => res.json(items))

});

/**
 * @route  POST api/items
 * @desc   Create an tem
 * @access Public 
 */
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save()
    .then(item => res.json(item));

});

/**
 * @route  DELETE api/items/:id
 * @desc   Delete an item
 * @access Public 
 */
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});


// ES6 so needs to use babel export default router;
module.exports = router;
