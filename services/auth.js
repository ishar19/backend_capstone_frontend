import axios from "axios";
import { handleApiResponse } from "../helper";
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

    return handleApiResponse(res);
}
export const login = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/login`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}