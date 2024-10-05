import axios from "axios";
import { addTokenToHeader } from "../helper";
export function getAllJobs() {
    const headers = addTokenToHeader({ headers: {} });
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/job`, {
        headers
    });
    return res;
}