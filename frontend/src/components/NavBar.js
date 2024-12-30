import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import API from "../services/axoisInstance";
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";


const API_URL = "api/users";

const NavBar = () => {
  const navData = ["Home", "Vaccination", "Counseling", "SignUp"];

  const [user, setUser] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [token, setToken] = useContext(Context);
  const [userDetails, setUserDetails] = useState(false);
  const navigate = useNavigate();
  const signOut = () => {
    setToken(null);
    setUserDetails(null);
    setShowDropDown(false);
  }
  
  if (token) {
    // console.log("TT" + token);
    API.post(`${API_URL}/getUser`, { token }).then((response) => {
      setUser(response.data);
      
    });
  }

  useEffect(() =>{
    if (showDropDown) {
      API.get(`${API_URL}/userSettings`, { params: { user } }).then(
        (response) => {
          setUserDetails(response.data);
        }
      );
    }
  }, [showDropDown, user])

  const userNavData = ["Home", "Vaccination", "Counseling", user];
  return (
    <nav className="flex justify-between p-[20px] border-b-slate-300 border-[1px]">
      <div className="flex flex-row">
        <img src={logo2} alt="" className="h-10" />
        <img src={logo} alt="" className="h-10" />
      </div>
      <div className="flex flex-row w-[500px] justify-around items-center text-[18px]">
        {!token &&
          navData.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}

        {token &&
          userNavData.map(
            (item, index) =>
              (index !== 3 && (
                <Link key={index} to={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
              )) || (
                <Link
                  key={index}
                  to={window.location.pathname}
                  onClick={() => setShowDropDown(!showDropDown)}
                >
                  {item}
                </Link>
              )
          )}

        {showDropDown && (
          <div className="absolute bg-slate-50 right-10 top-20">
            <div className="flex flex-row gap-4 p-4 border-b-[1px] border-slate-400">
              <div>Welcome {userDetails}</div>
              <button className="px-3 border-2 rounded-md border-slate-600" onClick={()=> setShowDropDown(false)}>X</button>
            </div>
            <div>
              <ul className="px-8 py-4 list-none border-b-[1px] border-slate-400">
                <li className="m-2 ">Your Profile</li>
                <li className="m-2">User Dashbord</li>
                <li className="m-2">Change Password</li>
                
              </ul>
            </div>

            <button className="float-right px-4 py-2 my-4 mr-8 text-white rounded-md outline-none bg-slate-500" onClick={()=>signOut()}>Sign out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
