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

export const byReg = async(req, res) => {
    const {regNumber} = await req.query;
    const query = "SELECT * FROM user_details WHERE reg_number = ?";
    conn.query(query, [regNumber], (err, user) => {
        if(err){
            res.status(501).json({err: err.message})
        }else{
            if(user[0]) {
                res.status(200).json({name: user[0].name_with_initials})  
            }else{
                res.status(404).json({err: "username not found"})
            }
        }
    })
}