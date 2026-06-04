import express from "express";
import articleRoutes from './routes/articleRoutes.js'
import journalistRoutes from "./routes/journalistRoutes.js";
import categoriesRoutes from "./routes/categoryRoutes.js";
const app = express();

const PORT = 3000;

app.use(express.json()); //This is json body parser middleware

app.use('/articles', articleRoutes);
app.use('/journalists', journalistRoutes);
app.use('/categories', categoriesRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
