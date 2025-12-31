import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectToMongoDB from './database/connectToMongoDB.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);

app.listen(PORT, (req, res) => {
  connectToMongoDB();
  console.log(`Server is running at: http://localhost:${PORT}`);
});
