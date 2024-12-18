import mysql2 from 'mysql2';
import conn from '../config/db.js';
const array = [];

export const selected = (req,res) => {
    const query = "SELECT number FROM bookings";
    conn.query(query , (err, result) => {
        if(err){
            return res.status(500)
        }else{
            if(array.length === 0){
                result.map(e => {
                    array.push(e.number);
                })
            }
            
            res.status(200).json({array: array});
            
        }
    })
}