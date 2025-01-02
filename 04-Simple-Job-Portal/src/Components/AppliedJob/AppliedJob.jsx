import React from "react";

const AppliedJob = ({ job }) => {
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
    <div className="card lg:card-side bg-base-300 shadow-md rounded-lg p-4 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:w-6/12 mt-5">
      <div className="flex-shrink-0">
        <img
          src={company_logo} // Replace with actual image URL
          alt="Company Logo"
          className="w-24 h-24 object-contain rounded-lg"
        />
      </div>

      {/* Job Details */}
      <div className="flex-1">
        <h2 className="card-title text-lg font-bold">{job_title}</h2>
        <p className="text-gray-500">{company_name}</p>
        <div className="flex gap-2 my-2">
          <span className="badge badge-primary">{job_type}</span>
          <span className="badge badge-secondary">{time}</span>
        </div>
        <div className="text-gray-600 flex items-center gap-2">
          <span>📍 {location}</span>
          <span>💼 {salary}</span>
        </div>
      </div>

      {/* Action Button */}
      <div>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default AppliedJob;
