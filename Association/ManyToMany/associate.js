import Student from "./model/student.js";
import Courses from "./model/courses.js";
import sequelize from "./config.js";
import enrollment from "./model/enrollment.js";
// Student.belongsToMany(Courses, {through: 'StudentCourses'})
// Courses.belongsToMany(Student, {through: 'StudentCourses'})

Student.belongsToMany(Courses, {through: enrollment})
Courses.belongsToMany(Student, {through: enrollment});
