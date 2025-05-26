import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/products.routes.js"
import cors from "cors";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.error("error connecting to mongodb"));

const app = express()

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000", // Allow frontend running on port 3000
    credentials: true                // If you use cookies/auth headers
}));

app.use('/api/v1',productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});
    