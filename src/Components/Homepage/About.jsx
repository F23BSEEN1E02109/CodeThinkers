import React from "react";
import codethinker1 from "../../assets/codethinker1.jpg";

function About() {
  const aboutPoints = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process",
  ];

  return (
    <section className="w-full min-h-[560px] py-[90px] px-[7%] max-[600px]:py-[60px] max-[600px]:px-[20px] bg-transparent box-border">
      <div className="max-w-[1150px] mx-auto flex items-center justify-between gap-[70px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-[50px]">
        
        {/* Content Box */}
        <div className="flex-1 max-w-[570px] max-[900px]:max-w-[700px] max-[900px]:w-full">
          <h2 className="m-0 mb-[12px] text-[38px] max-[600px]:text-[30px] font-normal leading-[1.2] text-[#151515]">
            About <span className="text-[#0754c9] font-semibold">Code's</span> Thinker
          </h2>

          <p className="m-0 mb-[25px] text-[#666] text-[16px] max-[600px]:text-[14px] leading-[1.6]">
            We redefine excellence in business solution at Code's Thinker...
          </p>

          {/* Points List */}
          <div className="flex flex-col gap-[10px]">
            {aboutPoints.map((point, index) => (
              <div
                key={index}
                className="group w-fit min-w-[300px] max-[600px]:min-w-0 max-[600px]:w-full flex items-center py-[7px] pr-[14px] pl-0 rounded-[20px] text-[#555] text-[15px] max-[600px]:text-[14px] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#0754c9] hover:bg-[#0754c9]/[0.06] hover:translate-x-[6px]"
              >
                <span className="w-[13px] h-[13px] mr-[14px] rounded-full bg-gradient-to-br from-[#0878e8] to-[#0754c9] shrink-0 transition-all duration-300 ease-in-out group-hover:scale-[1.25] group-hover:bg-[#0754c9]"></span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Box */}
        <div className="w-[450px] h-[400px] shrink-0 border border-[#eeeeee] bg-white/35 rounded-2xl overflow-hidden transition-all duration-350 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_15px_35px_rgba(7,84,201,0.12)] max-[900px]:w-full max-[900px]:max-w-[500px] max-[900px]:h-[350px] max-[600px]:h-[280px]">
          <img
            src={codethinker1}
            alt="About Code's Thinker"
            className="w-full h-full block object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default About;