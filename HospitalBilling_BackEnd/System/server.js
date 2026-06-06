import express from 'express';
import departmentRoutes from './routes/departmentRoutes';
// import categor
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/categories', categoryRoutes)
app.use('/departments', departmentRoutes)

app.listen(port, () => {
      console.log(`🚀 Srver is running on http://localhost:${port}`);

})