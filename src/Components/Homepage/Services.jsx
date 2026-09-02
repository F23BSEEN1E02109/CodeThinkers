import React, { useState } from "react";

const services = {
  Development: [
    "Custom Development",
    "Web App Development",
    "Mobile App Development",
    "Blockchain Dev",
    "Crypto Token Dev",
    "Wordpress Dev",
  ],

  Management: [
    "Project Management",
    "Business Management",
    "Team Management",
    "Digital Management",
    "Operations Management",
    "Client Management",
  ],

  Marketing: [
    "Digital Marketing",
    "Social Media Marketing",
    "SEO Optimization",
    "Content Marketing",
    "Email Marketing",
    "Brand Promotion",
  ],

  "Graphics & Visuals": [
    "Logo Design",
    "UI/UX Design",
    "Brand Identity",
    "Social Media Graphics",
    "Poster Design",
    "Creative Visuals",
  ],

  "Video Editing": [
    "YouTube Video Editing",
    "Reels Editing",
    "Shorts Editing",
    "Motion Graphics",
    "Video Ads",
    "Professional Editing",
  ],

  "Content Writing": [
    "Website Content",
    "Blog Writing",
    "SEO Content",
    "Social Media Content",
    "Copywriting",
    "Product Descriptions",
  ],
};

const serviceNames = Object.keys(services);

export default function Services() {
  const [activeService, setActiveService] = useState("Development");

  return (
    <section className="min-h-screen bg-[#fdfdfd] px-4 py-10 sm:px-6 md:px-10 md:py-16 lg:px-20">

      {/* Custom Scrollbar Utility */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Heading */}
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-[#0758e8]">Services</span>{" "}
          <span className="text-black">We Offer</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-xs leading-5 text-gray-600 sm:mt-6 sm:text-sm md:text-base">
          TOJO GLOBAL offers crypto solutions, targeted marketing, impactful
          design, custom development, and professional video editing to elevate
          your brand.
        </p>
      </div>

      {/* Services Container */}
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-start gap-8 md:mt-12 md:grid-cols-[260px_1fr] md:gap-12 lg:grid-cols-[290px_1fr] lg:gap-16">

        {/* Left Filter Tabs */}
        {/* Horizontal scrollable row on mobile, vertical stacked column on tablet/desktop */}
        <div className="no-scrollbar flex w-full flex-row gap-2.5 overflow-x-auto pb-2 md:flex-col md:gap-3 md:overflow-visible md:pb-0">
          {serviceNames.map((service) => {
            const active = activeService === service;

            return (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`
                  h-10 shrink-0 rounded-full border px-4
                  text-center text-xs font-semibold whitespace-nowrap
                  transition-all duration-300
                  sm:h-11 sm:px-5 sm:text-sm
                  md:h-12 md:w-full md:text-base
                  ${
                    active
                      ? "border-[#0758e8] bg-gradient-to-r from-[#082b91] to-[#0758e8] text-white shadow-md"
                      : "border-gray-200 bg-white text-black hover:border-[#0758e8] hover:bg-gradient-to-r hover:from-[#082b91] hover:to-[#0758e8] hover:text-white"
                  }
                `}
              >
                {service}
              </button>
            );
          })}
        </div>

        {/* Right Content Grid */}
        <div className="flex min-h-[220px] items-center justify-center md:justify-start">
          <div
            key={activeService}
            className="grid w-full grid-cols-2 gap-4 text-center sm:gap-6 lg:grid-cols-3 md:text-left"
          >
            {services[activeService].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#0758e8]/30 hover:shadow-md hover:text-[#0758e8] md:items-start md:justify-start md:border-none md:bg-transparent md:p-0 md:shadow-none"
              >
                <span className="cursor-pointer text-xs font-medium text-gray-900 transition-all duration-200 hover:text-[#0758e8] sm:text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}