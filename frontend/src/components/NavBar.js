import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { Link } from "react-router-dom";
import API from "../services/axoisInstance";
import { useState } from "react";
const API_URL = "api/users";


const NavBar = (userToken) => {
  const navData = ["Home", "Vaccination", "Counseling" ,"SignUp"];
  
  const [user, setUser] = useState(false);
  
  if(userToken.setToken) {
    const token = userToken.setToken;
    console.log("TT"+ token);
    API.post(`${API_URL}/getUser`, { token }).then((response) => {
      setUser(response.data);
    });
  } 

  const userNavData = ["Home", "Vaccination", "Counseling" , user];
  return (
    <nav className="flex justify-between p-[20px] border-b-slate-300 border-[1px]">
      <div className="flex flex-row">
        <img src={logo2} alt="" className="h-10" />
        <img src={logo} alt="" className="h-10" />
      </div>
      <div className="flex flex-row w-[500px] justify-around items-center text-[18px]">
        {!userToken.setToken && navData.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase()}`}>
            {item}
          </Link>
        ))}

        {userToken.setToken && (userNavData.map((item, index) => (
          <Link key={index} to={``}>
            {item}
          </Link>
        )))}
      </div>
    </nav>
  );
};

export default NavBar;
