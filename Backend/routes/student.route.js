const express = require('express');
const router = express.Router();
const studentController=require('../Controller/student.controller');
const authMiddleware=require('../Middleware/auth.middleware');

//CRUD operations for students
router.post('/',authMiddleware,studentController.createStudent);
router.get('/',authMiddleware,studentController.getAllStudents);
// router.get('/:id',authMiddleware,studentController.getStudentById);
// router.put('/:id',authMiddleware,studentController.updateStudent);
// router.delete('/:id',authMiddleware,studentController.deleteStudent);
module.exports = router;