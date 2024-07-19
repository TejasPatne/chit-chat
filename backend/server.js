// package imports
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// file imports
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToDatabase from './db/connectToDatabase.js';
import { app, server } from './socket/socket.js';

// variables
const PORT = process.env.PORT || 5000;

dotenv.config();

// middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body) for POST and PUT requests
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server is running on http://localhost:${PORT}`);
})