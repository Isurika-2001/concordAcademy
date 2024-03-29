const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define the API routes
router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);

module.exports = router;
