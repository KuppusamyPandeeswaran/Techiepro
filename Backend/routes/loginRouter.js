const express = require('express');
const router = express.Router();

const {
  techie_signin,
  techie_signup,
} = require('../controllers/loginController');

router.route('/signin').get(techie_signin);
router.route('/signup').post(techie_signup);

module.exports = router;
