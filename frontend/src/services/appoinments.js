import API from "./axoisInstance"


export const getBookedList = async() => {
    try {
        const response = await API.get('/api/appointment/selected');
        return response.data;
    }catch(err) {
        console.error(err);
    }
}