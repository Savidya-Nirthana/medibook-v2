import conn from "../config/db.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config()
export const registerUser = async(req, res) => {
    const {firstName, lastName, regNum, email, password} = req.body;
    const query = "INSERT INTO user_details (`full_name`, `reg_number`, `email`, `password`) VALUES (?, ?, ?, ?)";
    console.log(password);
    const encPass = await bcrypt.hash(password, 10);
    console.log(encPass);
    conn.query(query, [firstName, regNum, email, encPass], (err, result) => {
        if(err){
            console.log(err.message);
            return res.status(500).json({error: err.message});
        }

    })
}

export const loginUser = (req, res) => {
    const {username, password} = req.body;
    //console.log(username);
    const query = 'SELECT * FROM user_details WHERE email = ?'
    conn.query(query, [username], (err, result) => {
        if(err){
            return res.status(500).json({error : err.message});
        }

        if(result.length === 0) {
            return res.status(401).json({error: "invalid username or password"});
        }

        const user = result[0];
        //console.log(password);

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err) {
                console.log(err)
            }if(!isMatch) {
                console.log("invalid");
            }else{
                console.log("login successfull");
                const userToken = {name: username, regNum: user.reg_number}
                const accessToken = jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET);
                res.json({accessToken: accessToken})
            }
        })
    })
}