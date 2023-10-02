const Contact = require('../models/contact');

// Create a new contact
const createContact = async (req, res) => {
  try {
    const { id, name, phone, email, message } = req.body;
    const contact = await Contact.create({ id, name, phone, email, message });
    return res.status(201).json(contact);
  } catch (error) {
    return res.status(500).json({ error: 'Unable to create contact' });
  }
};

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ error: 'Unable to fetch contacts' });
  }
};

module.exports = { createContact, getContacts };
