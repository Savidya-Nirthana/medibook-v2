import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config()

const conn = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 
})


conn.connect((error)=> {
    if(error) throw error;
    console.log("database connected");
})

export default conn;