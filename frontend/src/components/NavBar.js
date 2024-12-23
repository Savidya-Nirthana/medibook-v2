import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { Link } from "react-router-dom";
const NavBar = (token) => {
  const navData = ["Home", "About", "SignUp"];
  const userNavData = ["Home", "Settings" ,"Logout"];
  console.log(token.setToken);
  return (
    <nav className="flex justify-between p-[20px] border-b-slate-300 border-[1px]">
      <div className="flex flex-row">
        <img src={logo2} alt="" className="h-10" />
        <img src={logo} alt="" className="h-10" />
      </div>
      <div className="flex flex-row w-[500px] justify-around items-center text-[18px]">
        {!token.setToken && navData.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase()}`}>
            {item}
          </Link>
        ))}

        {token.setToken && (userNavData.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase()}`}>
            {item}
          </Link>
        )))}
      </div>
    </nav>
  );
};

export default NavBar;
