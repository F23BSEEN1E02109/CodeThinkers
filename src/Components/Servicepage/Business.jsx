import React from "react";
import service from "../../assets/service.png";

const Business = () => {
  return (
    <section className="w-full bg-white flex items-center overflow-hidden py-10 sm:py-14 md:py-16">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-8">

          {/* LEFT CONTENT */}  
          <div className="flex flex-col justify-center text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-6xl font-bold leading-tight text-[#101828]">
              Perfect IT{" "}
              <span className="text-[#1455c0]">
                Solutions
              </span>{" "}
              Business
            </h1>

            <p className="mt-4 sm:mt-6 max-w-[850px] text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed text-gray-600">
              Perfect IT Solutions provides expert services in software
              development, IT consulting, cloud solutions, network security,
              data management, technical support, web design, and system
              integration to empower business growth and efficiency.
            </p>

            <div className="mt-6 sm:mt-8">
              <button
                className="
                  px-6 py-3 sm:px-8 sm:py-3.5
                  rounded-full
                  bg-[#1455c0]
                  text-white
                  text-sm sm:text-[16px]
                  font-semibold
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#0d3f91]
                  hover:scale-105
                  hover:shadow-lg
                  active:scale-95
                "
              >
                Contact Us
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
            <img
              src={service}
              alt="Perfect IT Solutions"
              className="
                w-full
                max-w-[320px]
                sm:max-w-[450px]
                md:max-w-[520px]
                lg:max-w-[600px]
                h-auto
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Business;