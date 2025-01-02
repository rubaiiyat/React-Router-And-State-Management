import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/StoredJob";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [jobApplieds, setJobApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJobsId = getStoredApplication();

    if (jobs.length > 0) {
      const appliedJobs = [];

      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);

        if (job) {
          appliedJobs.push(job);
        }
      }

      setJobApplied(appliedJobs);
      setDisplayJobs(jobApplieds);
      console.log(jobs, storedJobsId, appliedJobs);
    }
  }, []);

  const handleJobFilter = (filter) => {
    if (filter == "all") {
      setDisplayJobs(jobApplieds);
    } else if (filter === "remote") {
      const remoteJobs = jobApplieds.filter((job) => job.job_type === "Remote");
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsite = jobApplieds.filter((job) => job.job_type === "On-Site");
      setDisplayJobs(onsite);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-auto  p-6">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleJobFilter("all")}>
            <a> All</a>
          </li>
          <li onClick={() => handleJobFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("onsite")}>
            <a>On-Site</a>
          </li>
        </ul>
      </div>
      <h1>This is applied jobs pages</h1>
      <h1>{jobApplieds.length}</h1>

      {displayJobs.map((job) => (
        <AppliedJob key={job.id} job={job}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
