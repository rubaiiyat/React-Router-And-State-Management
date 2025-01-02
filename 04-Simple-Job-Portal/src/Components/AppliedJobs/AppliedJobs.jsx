import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/StoredJob";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [jobApplieds, setJobApplied] = useState([]);
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

      console.log(jobs, storedJobsId, appliedJobs);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-auto  p-6">
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Job Type
        </option>
        <option>All</option>
        <option>Remote</option>
        <option>On-Site</option>
      </select>
      <h1>This is applied jobs pages</h1>
      <h1>{jobApplieds.length}</h1>

      {jobApplieds.map((job) => (
        <AppliedJob key={job.id} applied={job}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
