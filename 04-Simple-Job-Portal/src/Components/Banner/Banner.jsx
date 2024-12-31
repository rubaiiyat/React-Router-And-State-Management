import React from "react";
import banner from "../../assets/img/banner.png";
const Banner = () => {
  return (
    <div className="">
      <section class="px-3 py-5  lg:py-10">
        <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div class="order-2 lg:order-1 flex flex-col justify-center items-center md:items-start">
            <p class="text-4xl font-bold md:text-7xl ">One Step </p>
            <p class="text-4xl font-bold md:text-7xl">Closer To Your</p>
            <p class="text-4xl font-bold md:text-7xl text-accent">Dream Job</p>
            <p class="text-sm md:text-lg max-w-96 text-center md:text-start mt-5 mb-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button class="btn btn-accent">Get Started</button>
          </div>
          <div class="order-2 lg:order-2">
            <img class=" " src={banner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
