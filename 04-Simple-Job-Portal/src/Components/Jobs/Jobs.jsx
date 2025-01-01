import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(10);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-20 mt-5">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={dataLength === jobs.length ? `hidden ` : "mt-5 mb-5"}>
        <button
          onClick={() => setDataLength(dataLength + 10)}
          className="btn btn-accent"
        >
          See More Jobs
        </button>
      </div>
    </div>
  );
};

export default Jobs;
