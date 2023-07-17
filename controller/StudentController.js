const student = require('../model/Student');
const {response} = require('express');

const req = require('express/lib/request');
const res = require('express/lib/response');

const saveStudent = (req,res) => {
    const tempStudent = new Student({
        id : req.body.id,
        name : req.body.name,
        gender : req.body.gender,
        address : req.body.address
    })
    console.log(tempStudent);

    student.findOne()

}
const getStudent = () => {}
const updateStudent = () => {}
const deleteStudent = () => {}