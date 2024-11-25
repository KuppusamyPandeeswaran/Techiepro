const express = require('express');
const router = express.Router();

const {
  get_single_techie,
  get_all_techie,
  update_techie,
} = require('../controllers/techieController');

router.route('/').get(get_all_techie);
router.route('/:id').get(get_single_techie).patch(update_techie);

module.exports = router;
