import API from "./axoisInstance";
const API_URL = "api/users";

export const login = async (username, password) => {
  try {
    const response = await API.post(`${API_URL}/login`, { username, password });
    console.log(response.data);
    return response.data;
  } catch (err) {
    if(err.response.status === 401){
        return {err: "Invalid username or password"}
    }
  }
};

export const register = async (
  firstName,
  lastName,
  regNum,
  email,
  password
) => {
  try {
    const response = await API.post(`${API_URL}/register`, {
      firstName,
      lastName,
      regNum,
      email,
      password,
    });
    console.log(firstName);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
