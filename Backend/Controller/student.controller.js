const pool = require('../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = require('../Middleware/auth.middleware');

exports.createStudent = async (req, res) => {
  try {
    const { name, email, address, class: studentClass } = req.body;
    const adminId = req.adminId; // fetched from auth middleware
    if(name == null || email == null || address == null || studentClass == null) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    //if the name ,email,address or class are already present in the database then return error
    const existingStudent = await pool.query(
      `SELECT * FROM students WHERE email = $1 AND name = $2`,
      [email, name]
    );
    if (existingStudent.rows.length > 0) {
      return res.status(400).json({ message: "Student with this email already exists" });
    }


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


exports.getAllStudents = async (req, res) => {
  try {
    const adminId = req.adminId;

    const result = await pool.query(
      `SELECT id, name, email, address, class 
       FROM students 
       WHERE admin_id = $1 
       ORDER BY id DESC`,
      [adminId]
    );

    return res.status(200).json({
      total: result.rows.length,
      students: result.rows
    });

  } catch (err) {
    console.error("Error getting students:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

