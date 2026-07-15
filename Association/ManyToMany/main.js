import Student from "./model/student.js";
import Courses from "./model/courses.js";
import sequelize from "./config.js";
import enrollment from "./model/enrollment.js";
// import './associate.js'
// await sequelize.sync({alter: true});
// const students = await Student.findAll(
//     { where: { group: 1 } }

// );
// for (const student of students) {
//     console.log(` ${student.name} (Group ${student.group}):`);
//     const courses = await student.getCourses();
//     for (const course of courses) {
//         console.log(` ${course.title}`);
//     }
// }
const students = await Student.findAll(
    {
        where: { group: 1 },
        include: Courses
    }
);
for (const student of students) {
    console.log(` ${student.name} (Group ${student.group}):`);
    const courses = await student.getCourses();
    for (const course of courses) {
        console.log(`${course.title}`);
    }
}
sequelize.close();
