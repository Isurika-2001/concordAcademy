const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Initialize the database and sync models
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Use the contact routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
