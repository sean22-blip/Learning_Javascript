import sequeulize from '../dbConfig/dbConfig.js'
import Student from '../model/Student.js';
import Grade from '../model/Grade.js';
import Course from '../model/courses.js'
// import express from 'express'
// express.json(());
export const CreateNewStudent = async ( req, res,) => {
    
}
export const DelStudent = async ( req, res,) => {
    const student_id = req.params.id;
    if(!student_id){
        return res.status(404).json({Error: `student id must be provided`})
    }
    try {
        
        const findDelStudent = await Student.destroy({
            where:{
                student_id: student_id
            }
        });
        if(!findDelStudent){
            return res.status(404).json({Error: `cannot find the matching studentId!`})
        }
        res.status(200).json({ message: `Successfully deleted student ${student_id}` });
    } catch (error) {
        console.log({error: `There is an error in deleting student!`})
        return res.status(500).json({error: `There is an error in deleting student!`})
    }
}
export const UpdateStudent = async ( req, res,) => {
    
}
export const getStudentById = async ( req, res) => {
    try {
        const student_id = req.params.id;
        if(!student_id){
            return res.status(404).json(`studnet id must be provided!`)
        }
        const findStudent = await Student.findByPk(student_id)
        if(!findStudent){
            return res.status(404).json(`cannot find student with this id!`)    
        }
        const students = await Student.findAll({where: {age: 20}})
        for(const student of students){
            console.log(`${student.getFullName()} , (Age: ${student.age})`)
            const courses = await student.get
            for(const course of corses){
                console.log(`${course.title}`)
            }
        }
        res.status(201).json(
            findStudent.getFullName()
        );
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.status})

    }
}
export const getAllStudent = async ( req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
