import express from 'express'
import sequelize from './dbConfig/dbConfig.js';
import { StudentRoutes } from './routes/StudentRoute.js';
import { departmentRoutes } from './routes/DepartmentRoutes.js';
import cors from 'cors'
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
try {
    await sequelize.authenticate();
    app.use('/api/Students', StudentRoutes)
    app.use('/api/Departments', departmentRoutes)
    app.listen(port, () => {
        console.log(`Server is starting at port ${port}`)
    });
} catch (error) {
    console.log("Error in server", error)
}

