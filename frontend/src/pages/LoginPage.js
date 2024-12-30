import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/userAuthService";
import { Context } from "../App";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);
  const [token, setToken] = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      const data = await login(username, password);
      console.log(data.err);
      if(data.err){
        setPasswordErr(data.err);
      }else{
        setPasswordErr(null);
        setToken(data);
        navigate('/home')
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="">
      <div className="w-[400px] m-auto py-5 mt-10 px-10 bg-slate-100">
        <div className="m-auto ">
          <p className=" text-center text-[40px] text-slate-600">Login</p>
          <label>Username:</label>
          <br />
          <input
            className="w-full p-2 outline-none "
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <input
            className="w-full p-2 outline-none "
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className="px-10 py-2 rounded-md text-slate-100 bg-slate-800"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
      {passwordErr &&
      (
        <>
          <div className=" bg-red-700 w-[400px] m-auto px-6">
            <p className="py-2 text-slate-100">
              {passwordErr} <br />
              <a href="#" className="font-bold text-blue-200 underline ">
                forgot password
              </a>
            </p>
          </div>
        </>
      )
    }
      <div className=" bg-slate-700 w-[400px] m-auto px-6">
        <p className="py-2 text-slate-100">
          If you don't have an account please{" "}
          <a href="/signup" className="font-bold text-blue-200 underline ">
            sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
