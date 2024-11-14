const express = require('express');
const router = express.Router();

const { techie_login } = require('../controllers/login');

router.route('/').get(techie_login);

module.exports = router;
