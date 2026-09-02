import React from "react";

const featuresData = [
  ["₿", "Blockchain Expertise"],
  ["▣", "Small Business Support"],
  ["🔒", "Crypto Solutions"],
  ["🚀", "Startup Business"],
  ["⇄", "B2B Integration"],
  ["💡", "Fintech Innovation"],
];

function Features() {
  return (
    <section className="w-full overflow-hidden bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex min-h-[500px] max-w-6xl items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">

          {/* MAIN CIRCLE HEAD */}
          <div
            className="
              flex h-[240px] w-[240px] shrink-0
              items-center justify-center
              rounded-full
              border border-gray-400
              bg-white
              text-black
              transition-all duration-500
              hover:border-blue-600
              hover:bg-blue-600
              hover:text-white
              cursor-pointer
              sm:h-[280px] sm:w-[280px]
              lg:h-[310px] lg:w-[310px]
            "
          >
            <h2 className="text-center text-2xl font-medium leading-tight sm:text-3xl">
              KEY
              <br />
              FEATURES
            </h2>
          </div>

          {/* LIST ITEMS CONTAINER */}
          <div className="flex w-full flex-col items-center gap-3 lg:w-[560px] lg:items-start">
            {featuresData.map(([icon, title], index) => (
              <div
                key={title}
                className={`
                  flex h-[56px] w-full max-w-[380px]
                  cursor-pointer items-center
                  rounded-full
                  border border-gray-400
                  bg-white px-5
                  text-black
                  transition-all duration-500
                  hover:border-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  sm:h-[62px] sm:px-6
                  lg:w-[430px] lg:max-w-none
                  ${
                    index === 1 || index === 2 || index === 3
                      ? "lg:ml-16"
                      : index === 4
                      ? "lg:ml-8"
                      : "lg:ml-0"
                  }
                `}
              >
                <span className="w-10 text-base sm:w-12 sm:text-lg">
                  {icon}
                </span>

                <span className="text-sm font-medium sm:text-base">
                  {title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;