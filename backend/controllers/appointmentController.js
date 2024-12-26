import mysql2 from "mysql2";
import conn from "../config/db.js";

export const selected = (req, res) => {
  const query = "SELECT number FROM bookings";
  conn.query(query, (err, result) => {
    if (err) {
      return res.status(500);
    } else {
      const array = [];
      result.map((e) => {
        array.push(e.number);
      });

      res.status(200).json({ array: array });
    }
  });
};

export const byReg = async (req, res) => {
  const { regNumber } = await req.query;
  const query = "SELECT * FROM user_details WHERE reg_number = ?";
  conn.query(query, [regNumber], (err, user) => {
    if (err) {
      res.status(501).json({ err: err.message });
    } else {
      if (user[0]) {
        res.status(200).json({ name: user[0].name_with_initials });
      } else {
        res.status(404).json({ err: "username not found" });
      }
    }
  });
};

export const placeAppt = async (req, res) => {
  const { number, regNumber, note } = await req.body;
  const query1 = "SELECT * FROM user_details WHERE reg_number = ?";
  const query2 =
    "INSERT INTO bookings (`number`, `reg_number`, `name`, `email`, `date`, `remark`, `gender`, `marked`) VALUES (?, ?, ? , ?, ?, ?, ?, ? )";
  const today = new Date();
  const fdate = today.toISOString().slice(0, 10);
  conn.query(query1, [regNumber], (err, user) => {
    if (err) {
      console.log(err);
    } else {
      user = user[0];
      conn.query(
        query2,
        [
          number,
          regNumber,
          user.name_with_initials,
          user.email,
          fdate,
          note,
          user.gender,
          0,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return res.json({ msg: "Booking Success" });
          }
        }
      );
    }
  });
};
