const express = require('express');
const router = express.Router();
const authController = require('../Controller/auth.controller'); // path must exist

// Just minimal test handlers
router.post('/register', authController.registerAdmin);
router.post('/login', authController.loginAdmin);

module.exports = router;
