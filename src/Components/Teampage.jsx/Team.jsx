import React from "react";

import waseem from "../../assets/waseem.jpg";
import saim from "../../assets/saim.jpg";
import noor from "../../assets/noor.jpg";

const teamMembers = [
  {
    name: "Waseem M.",
    role: "CEO",
    image: waseem,
  },
  {
    name: "Saim",
    role: "Director/UK",
    image: saim,
  },
  {
    name: "Malaika Noor",
    role: "Business Developer",
    image: noor,
  },
];

export default function Team() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-20">
      
      {/* TOP HEADING */}
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Meet Our{" "}
          <span className="text-[#1700b8]">
            Team
          </span>
        </h1>

        <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
          Our team of passionate and experienced professionals is dedicated to
          driving your success. From strategy to execution, we combine
          creativity, innovation, and insight to deliver exceptional results.
        </p>
      </div>

      {/* TEAM SECTION */}
      <div className="mx-auto mt-12 sm:mt-16 md:mt-24 max-w-7xl">
        
        {/* SECTION TITLE */}
        <h2 className="mb-6 sm:mb-8 text-2xl font-semibold text-black sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
          Global{" "}
          <span className="text-[#1700b8]">
            Leadership
          </span>
        </h2>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg sm:h-[380px] lg:h-[420px]"
            >
              {/* IMAGE */}
              <img
                src={member.image}
                alt={member.name}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-105
                "
              />

              {/* DEFAULT DARK OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  sm:bg-black/35
                  transition-all
                  duration-500
                  group-hover:bg-black/50
                "
              />

              {/* NAME + ROLE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  translate-y-0
                  sm:translate-y-full
                  bg-[#26313c]/95
                  p-4
                  sm:p-5
                  text-center
                  transition-all
                  duration-500
                  ease-in-out
                  group-hover:translate-y-0
                "
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-0.5 sm:mt-1 text-sm sm:text-base text-gray-200">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}