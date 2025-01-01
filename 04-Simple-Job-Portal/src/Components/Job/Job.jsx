import React from "react";
import { CiLocationOn, CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    company_logo,
    job_title,
    company_name,
    job_type,
    time,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="text-start border border-gray-700  bg-base-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full ">
        <figure className="px-8 pt-10 w-36">
          <img src={company_logo} alt="Shoes" className="rounded" />
        </figure>
        <div className="card-body items-start ">
          <h2 className="card-title ">{job_title}</h2>
          <p className="text-gray-300">{company_name}</p>
          <div className="flex flex-wrap gap-5  items-center mt-1 mb-2">
            <h1 className="border border-accent text-center rounded text-accent p-2 px-5">
              {job_type}
            </h1>
            <h1 className="border border-accent text-center rounded text-accent p-2 px-5">
              {time}
            </h1>
          </div>

          <div className="flex flex-wrap gap-5  mb-3">
            <h1 className="flex gap-1 items-center">
              <CiLocationOn className="text-xl" /> {location}
            </h1>
            <h1 className="flex gap-1 items-center ">
              <CiDollar className="text-xl" /> {salary}
            </h1>
          </div>
          <div className="card-actions">
            <button className="btn btn-accent">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
