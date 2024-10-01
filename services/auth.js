import axios from "axios";

export const register = async (data) => {
    // const formData = new FormData();
    // Object.keys(data).forEach(key => {
    //     formData.append(key, data[key]);
    // })
    // const urlEncodedData = new URLSearchParams(formData).toString()
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}