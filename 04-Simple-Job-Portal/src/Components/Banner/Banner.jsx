import React from "react";
import banner from "../../assets/img/banner.png";
const Banner = () => {
  return (
    <div className="">
      <section className="px-3 py-5  lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center md:items-start">
            <p className="text-4xl font-bold md:text-7xl ">One Step </p>
            <p className="text-4xl font-bold md:text-7xl">Closer To Your</p>
            <p className="text-4xl font-bold md:text-7xl text-accent">
              Dream Job
            </p>
            <p className="text-sm md:text-lg max-w-96 text-center md:text-start mt-5 mb-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
          <div className="order-2 lg:order-2">
            <img className=" " src={banner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
