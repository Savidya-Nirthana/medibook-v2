import { useLocation } from "react-router-dom";
import API from "../services/axoisInstance";
import { useState } from "react";
const API_URL = "api/users";

const UserPage = ({setToken}) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const token = location.state?.token;
  setToken(token);
  API.post(`${API_URL}/getUser`, { token }).then((response) => {
    setUser(response.data);
  });
  console.log(user);
  return <div></div>;
};

export default UserPage;
