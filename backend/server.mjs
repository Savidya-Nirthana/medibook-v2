import express from "express";
import conn from "./config/db.js";
import cors from "cors";
import userRoutes from './routes/userRoutes.js';
import userAppointments from './routes/userAppointments.js'

const server = express();
server.use(express.json());
server.use(cors());
server.use('/api/users', userRoutes);
server.use('/api/appointment', userAppointments);

server.listen(4000, () => {
  console.log("Server is running");
});
