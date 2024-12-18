import conn from "../config/db.js";

export const registerUser = () => {
    //
}

export const loginUser = (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    const query = 'SELECT * FROM user_details WHERE email = ?'
    conn.query(query, [username], (err, result) => {
        console.log(result.length);
        if(err){
            return res.status(500).json({error : err.message});
        }

        if(result.length === 0) {
            return res.status(401).json({error: "invalid username or password"});
        }

        const user = result[0];
        console.log(user.password);
    })
}