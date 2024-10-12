import axios from "axios";
import { addTokenToHeader } from "../helper";
export async function getAllJobs() {
    const headers = addTokenToHeader({ headers: {} });
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/job`, {
        headers
    });
    if (res.status === 401) {
        localStorage.removeItem("token");
        alert("You're logged out");
        window.location.href = "/login";
    }
    return res;
}

export function fetchJobById(id) {
    // return new Promise((resolve, reject) => {
    //     reject(new Error("Something went wrong"));
    // })
    const headers = addTokenToHeader({ headers: {} });
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/job/${id}`, {
        headers
    });
    return res;
}