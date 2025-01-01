import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const ApplySuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto  p-6">
      <h1 className="inline-flex items-center justify-center text-4xl p-3 rounded-full text-success bg-green-200">
        <FaCheck />
      </h1>

      <h1 className="text-2xl font-bold text-success mt-4">
        Application Successful!
      </h1>

      <p className="text-white text-center mt-2 max-w-md">
        Your application was submitted successfully. They will reach out to you
        shortly. Thank you for your patience and best of luck!
      </p>

      <Link to="/" className="mt-6">
        <button className="btn btn-accent px-6 py-2">Return to Home</button>
      </Link>
    </div>
  );
};

export default ApplySuccess;
