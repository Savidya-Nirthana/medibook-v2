import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
const NavBar = () => {
    const navData = ["Home", "About", "SignIn"];
    return (
        <nav className="flex justify-between p-[20px] border-b-slate-300 border-[1px]">
            <div className=" flex flex-row">    
                <img src={logo2} alt="" className=" h-10"/>
                <img src={logo} alt="" className=" h-10"/>
            </div>
            <div className=" flex flex-row w-[500px] justify-around items-center text-[18px]">
            {navData.map((item, index) => (
                <a key={index} href={`/${item.toLowerCase()}`}>{item}</a>

            ))}
            </div>
            
        </nav>
    )

}

export default NavBar;