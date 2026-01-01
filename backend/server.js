import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectToMongoDB from './database/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.listen(PORT, (req, res) => {
  connectToMongoDB();
  console.log(`Server is running at: http://localhost:${PORT}`);
});
