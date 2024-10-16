import { getAllJobs, searchJobs } from "../../services/job";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEditable } from "../../helper";
import Navbar from "../../components/navbar";
export default function JobList() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const loadAllJobs = () => {
        getAllJobs().then(res => {
            setJobs(res.data);
            setIsLoading(false);
        })
    }
    useEffect(() => {
        loadAllJobs();

    }, [])
    const routeToJobDetail = (id) => {
        navigate(`/list/${id}`);
    }
    const routeToEditJob = (id) => {
        navigate(`/editjob/${id}`);
    }
    const [search, setSearch] = useState("");
    const handleSearch = () => {
        searchJobs(search).then(res => {
            setJobs(res.data);
        })
    };
    const clearSearch = () => {
        setSearch("");
        loadAllJobs();
    }

    return (
        <>
            <Navbar />
            <p>Job List</p>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
            <button onClick={handleSearch}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            {isLoading ? <p>Loading...</p> : jobs.map((job, idx) => <p key={idx}>{job.name}
                <span>&nbsp;{job.salary}&nbsp;</span>
                {job._id ? <button onClick={() => routeToJobDetail(job._id)}>View</button> : null}
                {job ? isEditable(job.creator) ? <button onClick={() => routeToEditJob(job._id)}>Edit</button> : null : null}
            </p>)}
        </>
    )
}