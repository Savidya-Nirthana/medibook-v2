import { useState } from "react";
import { register } from "../services/userAuthService";

const SignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [regNum, setRegNum] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [selectYear, setSelectYear] = useState(null);
  const [selectDept, setSelectDept] = useState(null);
  const [selectIndex, setSelectIndex] = useState(null);
  const years = [2021, 2022, 2023, 2024];
  const dept = [
    "A",
    "BAD",
    "BS",
    "BST",
    "COM",
    "CSC",
    "PHY",
    "L",
    "MS",
    "NUR",
    "PHA",
  ];

  const regHandling = async () => {
    const data = await register(firstName, lastName, regNum, email, password);
  };
  return (
    <div className="flex items-center justify-center w-full h-[90vh]">
      <div className="">
        <div className=" text-slate-800 text-[30px]">Sign up for medibook</div>
        <form onSubmit={regHandling}>
          <table>
            <tr>
              <td>Full Name:</td>
              <td>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Name With Initials:</td>
              <td>
                <input
                  type="text"
                  placeholder="Name With Initials"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              
              <input type="radio" id="male" name="gender"/>Male
              <input type="radio" id="female" name="gender"/>Female
            </tr>
            <tr>
              <td>Registration number:</td>
              <td>
              <select onChange={(e) => setSelectYear(e.target.value)}>
                <option value={null}>Year</option>
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
              <select onChange={(e) => setSelectDept(e.target.value)}>
                <option>Department</option>
                {dept.map((dept) => (
                  <option value={dept}>{dept}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="000"
                onChange={(e) => setSelectIndex(e.target.value)}
              />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td>
                <input
                  type="password2"
                  placeholder="Retype Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
          </table>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
