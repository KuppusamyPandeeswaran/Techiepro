const express = require('express');
const router = express.Router();

const { get_single_techie, get_all_techie } = require('../controllers/techie');

router.route('/').get(get_all_techie);
router.route('/:id').get(get_single_techie);

module.exports = router;
