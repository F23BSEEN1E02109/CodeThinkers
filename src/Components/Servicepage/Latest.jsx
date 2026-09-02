import React from "react";

import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s8 from "../../assets/s8.jpg";
import s9 from "../../assets/s9.jpg";
import s10 from "../../assets/s10.jpg";
import s11 from "../../assets/s11.jpg";
import s12 from "../../assets/s12.jpg";
import s13 from "../../assets/s13.jpg";
import s14 from "../../assets/s14.jpg";

const services = [
  {
    image: s1,
    title: "Website Development",
    description:
      "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
  },
  {
    image: s2,
    title: "App Development",
    description:
      "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
  },
  {
    image: s3,
    title: "DevOps & Cloud",
    description:
      "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
  },
  {
    image: s4,
    title: "Machine Learning",
    description:
      "Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.",
  },
  {
    image: s5,
    title: "Blockchain",
    description:
      "Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.",
  },
  {
    image: s6,
    title: "Website Hosting",
    description:
      "Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.",
  },
  {
    image: s7,
    title: "WordPress Development",
    description:
      "Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.",
  },
  {
    image: s8,
    title: "SEO Optimization",
    description:
      "Improve your website ranking and visibility with proven SEO techniques and strategies.",
  },
  {
    image: s9,
    title: "UI/UX",
    description:
      "Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.",
  },
  {
    image: s10,
    title: "Graphic Designing",
    description:
      "Eye-catching graphics that represent your brand identity and convey your message effectively.",
  },
  {
    image: s11,
    title: "Video Editing",
    description:
      "Professional video editing for marketing, branding, tutorials, and more.",
  },
  {
    image: s12,
    title: "Code Calling",
    description:
      "Real-time expert coding assistance and live debugging for quick issue resolution.",
  },
  {
    image: s13,
    title: "Digital Marketing",
    description:
      "Boost your online presence through targeted campaigns and multichannel marketing strategies.",
  },
  {
    image: s14,
    title: "Lead Generation",
    description:
      "Generate high-quality leads with targeted campaigns and data-driven marketing strategies.",
  },
];

const Latest = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-8 sm:py-14 md:px-10 lg:px-16 lg:py-16">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">
          Latest{" "}
          <span className="text-[#1455c0]">
            Services
          </span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              group
              flex flex-col justify-between
              border-b-2
              border-[#1455c0]
              rounded-b-lg
              overflow-hidden
              bg-white
              pb-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            {/* Top Image Container */}
            <div>
              <div className="w-full aspect-[16/10] overflow-hidden rounded-t-lg bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="px-4 pt-4">
                <h3 className="text-base sm:text-[18px] font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-[14px] leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-5 px-4">
              <button
                className="
                  bg-[#1455c0]
                  text-white
                  px-5
                  py-2
                  rounded-full
                  text-xs
                  sm:text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-[#0d3f91]
                  hover:scale-105
                  shadow-sm
                  active:scale-95
                "
              >
                Learn More
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Latest;