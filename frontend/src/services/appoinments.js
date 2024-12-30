import API from "./axoisInstance"


export const getBookedList = async() => {
    try {
        const response = await API.get('/api/appointment/selected');
        return response.data;
    }catch(err) {
        console.error(err);
    }
}

export const getUser = async(regNumber) => {
    const response = await API.get('/api/appointment/byreg', {params: {regNumber}});
    return response.data;
}


export const placeAppointment = async(number, regNumber, note) => {
    try{
        const response = await API.post('/api/appointment/placeAppt', {number, regNumber, note});
        return response;
    }catch(err) {
        console.log(err);
    }
}



