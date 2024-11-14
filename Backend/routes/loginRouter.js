const express = require('express');
const router = express.Router();

const { techie_signin } = require('../controllers/login');

router.route('/signin').get(techie_signin);
// router.route('/signup').get(techie_signup);

module.exports = router;
