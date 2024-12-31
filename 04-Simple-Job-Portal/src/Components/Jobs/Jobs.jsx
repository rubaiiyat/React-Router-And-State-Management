import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center md:mx-32 px-4 text-white">
      <h1 className="text-4xl md:text-6xl mt-5 mb-5 font-bold">
        Featured Jobs
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {/* Map all the jobs data */}

      {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default Jobs;
