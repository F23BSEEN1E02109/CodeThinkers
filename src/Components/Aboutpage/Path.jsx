import React from "react";

function Path() {
  const pathData = [
    "Submit Application",
    "Initial Screening",
    "Interview",
    "Welcome Aboard",
  ];

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold text-blue-700 sm:text-3xl md:text-4xl lg:text-[42px] mb-10 sm:mb-16 md:mb-20">
        Your Path to Joining Code's Thinker
      </h2>

      {/* Steps Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 sm:gap-10 md:gap-6 relative">
        
        {pathData.map((item, index) => (
          <div
            key={item}
            className="flex-1 w-full flex flex-col items-center relative z-10"
          >
            {/* Step Circle */}
            <div
              className="
                w-28 h-28 sm:w-36 sm:h-36 lg:w-[185px] lg:h-[185px]
                rounded-full
                border-2 border-gray-800
                bg-white
                flex items-center justify-center
                cursor-pointer
                transition-all duration-300
                hover:border-blue-600
                hover:bg-blue-600
                hover:scale-105
                group
                shadow-sm
              "
            >
              <span
                className="
                  text-2xl sm:text-3xl lg:text-[42px] 
                  font-bold text-gray-800
                  transition-all duration-300
                  group-hover:text-white
                "
              >
                {index + 1}
              </span>
            </div>

            {/* Step Title */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-[21px] font-medium text-gray-800 text-center max-w-[220px]">
              {index + 1}. {item}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Path;