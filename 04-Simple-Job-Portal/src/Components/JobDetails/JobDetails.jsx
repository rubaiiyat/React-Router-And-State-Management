import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { MdOutlineSubtitles, MdAccessTime } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { saveJobApplication } from "../utility/StoredJob";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    phone,
    email,
    office_time,
    location,
    street,
  } = job;

  const handleJobApply = () => {
    saveJobApplication(parseInt(id));
  };
  return (
    <div className="text-center  md:mx-32 px-4 mb-48">
      <h1 className="text-4xl md:text-6xl p-5 text-center text-white">
        Job Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="px-5 lg:col-span-2">
          <h1 className="text-start mb-5">
            <span className="font-bold text-white">Job Description:: </span>
            {job_description}
          </h1>
          <h1 className="text-start mb-5">
            <span className="font-bold text-white">Job Responsibility:: </span>
            {job_responsibility}
          </h1>
          <h1 className="text-start mb-5">
            <span className="font-bold text-white">
              Educational Requirements:: <br />{" "}
            </span>
            {educational_requirements}
          </h1>
          <h1 className="text-start mb-5">
            <span className="font-bold text-white">
              Experiences:: <br />{" "}
            </span>
            {experiences}
          </h1>
        </div>
        <div>
          <div className="text-start border border-gray-700  bg-base-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full lg:col-span-1">
            <div className="card-body items-start ">
              <h1 className="card-title text-white mb-3"> Job Details</h1>
              <h1 className="border-t border-white w-full "></h1>

              <h2 className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xl md:text-base text-white flex items-center gap-1">
                  {" "}
                  <CiDollar className="text-2xl text-white" /> Salary :{"  "}
                </span>
                {salary} (Per Year)
              </h2>

              <h2 className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xl md:text-base text-white flex items-center gap-1">
                  {" "}
                  <MdOutlineSubtitles className="text-2xl text-white" /> Job
                  Title :{"  "}
                </span>
                {job_title}
              </h2>

              <h2 className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xl md:text-base text-white flex items-center gap-1">
                  {" "}
                  <MdAccessTime className="text-2xl text-white" /> Job Time :
                  {"  "}
                </span>
                {office_time}
              </h2>

              <h1 className="card-title text-white mb-3 mt-10">
                {" "}
                Contact Information
              </h1>
              <h1 className="border-t border-white w-full "></h1>

              <h2 className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xl md:text-base text-white flex items-center gap-1">
                  {" "}
                  <IoCall className="text-2xl text-white" /> Phone :{"  "}
                </span>
                {phone}
              </h2>

              <h2 className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xl md:text-base text-white flex items-center gap-1">
                  {" "}
                  <MdOutlineEmail className="text-2xl text-white" /> Email :
                  {"  "}
                </span>
                {email}
              </h2>

              <h2 className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xl md:text-base text-white flex items-center gap-1">
                  {" "}
                  <CiLocationOn className="text-2xl text-white" /> Location :
                  {"  "}
                </span>
                {street}, {location}
              </h2>
            </div>
          </div>
          <div className="card-actions mt-5 ">
            <Link className="block w-full">
              <button
                onClick={() => handleJobApply()}
                className="btn btn-accent w-full"
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
