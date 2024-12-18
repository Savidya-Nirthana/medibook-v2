import API from './axoisInstance';
const API_URL = 'api/users';


export const login = async (username, password) => {
    try{
        const response = await API.post(`${API_URL}/login`, { username, password});
        console.log(username);
        return response.data;
    }catch(err){
        console.log(err);
    }
    
}

const register = () => {
 //
}