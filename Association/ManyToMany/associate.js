import Student from "./model/student.js";
import Courses from "./model/courses.js";
import sequelize from "./config.js";

Student.belongsToMany(Courses, {through: 'StudentCourses'})
Courses.belongsToMany(Student, {through: 'StudentCourses'})