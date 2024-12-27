import AppointmentSel from "./components/AppointmentSel.js";
import NavBar from "./components/NavBar.js";
import HomePage from "./pages/HomePage.js"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
import UserPage from "./pages/UserPage.js";
import { useState } from "react";


function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setToken={token}/>
        {console.log(token)}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage setToken={setToken}/>}/>
          <Route path="/userdashboard" element={<UserPage setToken={setToken}/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
  
}

export default App;
