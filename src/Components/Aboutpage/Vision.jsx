import vision from "../../assets/vision.jpg";

function Vision() {
  const points = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process",
  ];

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-8 sm:py-16 md:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

        {/* Left Image */}
        <div className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-sm">
          <img
            src={vision}
            alt="Our Vision"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col">
          <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            WHO WE ARE
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900 mb-4">
            YOUR <span className="text-blue-700 font-semibold">VISION</span> OUR CODE
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6">
            At Codes Thinker, we are a passionate team of developers,
            designers, and strategists dedicated to building smart, scalable,
            and user-focused digital solutions. We thrive on creativity and
            cutting-edge technology to transform ideas into impactful
            products. With a commitment to quality, transparency, and client
            satisfaction, we don't just deliver code — we deliver value. Every
            project we take on reflects our belief in innovation, precision,
            and long-term partnerships.
          </p>

          {/* Points */}
          <div className="flex flex-col gap-1.5 w-full">
            {points.map((point) => (
              <div
                key={point}
                className="
                  group
                  w-full
                  max-w-lg
                  px-3 py-2 sm:px-4 sm:py-2.5
                  flex items-center gap-3
                  rounded-lg
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-gray-50
                  hover:shadow-sm
                  hover:translate-x-1.5
                "
              >
                <span
                  className="
                    text-base sm:text-lg text-gray-700
                    transition-all duration-300
                    group-hover:text-blue-600
                    group-hover:translate-x-1
                    shrink-0
                  "
                >
                  →
                </span>

                <span
                  className="
                    text-sm sm:text-base text-gray-700
                    transition-all duration-300
                    group-hover:text-blue-700
                    font-medium
                  "
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Vision;