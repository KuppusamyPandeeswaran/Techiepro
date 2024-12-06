const express = require('express');
const router = express.Router();

const techieController = require('../controllers/techieController');
const authController = require('../controllers/authController');

router.get('/', authController.protect, techieController.get_all_techie);

router.patch(
  '/updateMe',
  authController.protect,
  techieController.update_techie
);
router.route('/:id').get(techieController.get_single_techie);

module.exports = router;
