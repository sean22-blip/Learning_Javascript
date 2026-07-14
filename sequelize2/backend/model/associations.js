import department from "./Department.js";
import Grade from "./Grade.js";
import Student from "./Student.js";
import Payment from "./Payment.js";
import Course from "./courses.js";
department.hasMany(Student, { foreignKey: 'department_id' });
Student.belongsTo(department, { foreignKey: 'department_id' });

Student.hasMany(Grade, { foreignKey: `student_id` });
Grade.belongsTo(Student, { foreignKey: `student_id` });

Student.hasMany(Payment, {foreignKey: `student_id`})
Payment.belongsTo(Student, {foreignKey: `student_id`})

Student.belongsToMany(Course, {through: 'Enrollment'})
Course.belongsToMany(Student, {through: 'Enrollment'})