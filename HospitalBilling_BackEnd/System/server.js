import express from 'express';

import categoryRoutes from './routes/categoryRoutes';
import departmentRoutes from './routes/departmentRoutes';
import machineRoutes from './routes/machineRoutes';
// import categor
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/categories', categoryRoutes)
app.use('/departments', departmentRoutes)
app.use('/machines', machineRoutes)
app.listen(port, () => {
      console.log(`🚀 Srver is running on http://localhost:${port}`);

})