const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Health route


const authRoute = require('./routes/auth.route');
app.use('/api/auth', authRoute);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
