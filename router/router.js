const express = require('express')
const router = express.Router();
const token = require('../middleware/jwt')

const { signUp, signIn} = require('../controller/register');

const { myjoi } = require('../middleware/joi');
const { schema } = require('../middleware/schema');
const { createStudent, getStudent, getSingale,
                     updateStudent, deleteStudent } = require('../controller/student');


//authorazation
router.post('/signup',myjoi(schema.signUp),signUp);
router.post('/signin',myjoi(schema.signIn),signIn);

//studnet CRUD
router.post('/',myjoi(schema.createStudent),createStudent);
router.get('/',token,getStudent);
router.get('/:id',getSingale);
router.patch('/:id',updateStudent);
router.delete('/:id',deleteStudent)

module.exports=router