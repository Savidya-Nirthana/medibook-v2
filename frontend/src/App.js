import AppointmentSel from "./components/AppointmentSel.js";
import NavBar from "./components/NavBar.js";
import HomePage from "./pages/HomePage.js"; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp.js";
import UserPage from "./pages/UserPage.js";
import React, { useState} from "react";
import Vaccination from "./pages/Vaccination.js";
import Footer from "./components/Footer.js";
import StudentCounselling from "./pages/StudentCounselling.js";

export const Context = React.createContext();
export const App = () => {
  const [token, setToken] = useState(null);
  if(window.location.pathname === '/'){
      window.location.href = './home';
  }
  return (
    <div className="App">
    <Context.Provider value={[token,setToken]}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/vaccination" element={<Vaccination/>}/>
          <Route path="/counseling" element={<StudentCounselling />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
  
}


