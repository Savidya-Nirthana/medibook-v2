import { useState } from "react";
import { login } from "../services/userAuthService";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("submitted");
    try{
        const data = await login(username, password);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="">
      <div className="w-[400px] m-auto py-5 mt-10 px-10 bg-slate-100">
        <div className="  m-auto  ">
          <p className=" text-center text-[40px] text-slate-600">Login</p>
          <label>Username:</label>
          <br />
          <input
            className=" w-full outline-none p-2"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <input
            className=" w-full outline-none p-2"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className=" text-slate-100 bg-slate-800 px-10 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>

      <div className=" bg-slate-700 w-[400px] m-auto px-6">
        <p className=" py-2 text-slate-100">
          If you don't have an account please{" "}
          <a href="#" className=" text-blue-200 font-bold underline">
            sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;