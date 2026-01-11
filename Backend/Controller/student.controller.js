const pool = require('../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = require('../Middleware/auth.middleware');

exports.createStudent = async (req, res) => {
  try {
    const { name, email, address, class: studentClass } = req.body;
    const adminId = req.adminId; // fetched from auth middleware

    const newStudent = await pool.query(
      `INSERT INTO students (name,  email, address, class, admin_id)
       VALUES ($1, $2, $3, $4, $5 )
       RETURNING *`,
      [name, email, address, studentClass, adminId]
    );

    res.status(201).json(newStudent.rows[0]);  // send the created student back
  } catch (err) {
    console.error("Error creating student:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
