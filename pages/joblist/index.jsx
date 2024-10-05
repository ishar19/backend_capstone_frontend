import { getAllJobs } from "../../services/job";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
export default function JobList() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getAllJobs().then(res => {
            setJobs(res.data);
            setIsLoading(false);
        })
    }, [])
    const routeToJobDetail = (id) => {
        navigate(`/list/${id}`);
    }
    const isEditable = (id) => {
        const token = localStorage.getItem("token");
        const decoded = decodeToken(token);
        return decoded.id == id;
    }
    return (
        <>
            <p>Job List</p>
            {isLoading ? <p>Loading...</p> : jobs.map((job, idx) => <p key={idx}>{job.name}
                <span>&nbsp;{job.salary}&nbsp;</span>
                {job._id ? <button onClick={() => routeToJobDetail(job._id)}>View</button> : null}
                {isEditable(job.creator) ? <button>Edit</button> : null}
            </p>)}
        </>
    )
}