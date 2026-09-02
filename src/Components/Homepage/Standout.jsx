import React from "react";

function Standout() {
  const standoutItems = [
    {
      icon: "💡",
      title: "Custom Web",
      subtitle: "Experiences",
    },
    {
      icon: "✨",
      title: "Innovative UI/UX",
      subtitle: "Design",
    },
    {
      icon: "☀️",
      title: "Scalable Tech",
      subtitle: "Solutions",
    },
    {
      icon: "⏱️",
      title: "24/7 Support &",
      subtitle: "Maintenance",
    },
  ];

  return (
    <section className="w-full bg-[#eceaea] px-4 py-10 text-center sm:px-6 sm:py-16 md:py-20">
      {/* Section Heading */}
      <h2 className="mx-auto mb-8 text-2xl font-bold text-[#0754c9] sm:mb-12 sm:text-3xl md:text-4xl">
        What Makes Us Stand Out?
      </h2>

      {/* Cards Container */}
      <div className="mx-auto grid max-w-[1050px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {standoutItems.map((item, index) => (
          <div
            key={index}
            className="group flex w-full max-w-[280px] flex-col items-center justify-center rounded-[25px] bg-white/75 p-6 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[#0754d0] hover:shadow-[0_12px_30px_rgba(0,80,200,0.18)] sm:max-w-none min-h-[190px]"
          >
            {/* Icon Circle */}
            <div className="mb-4 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br from-[#0878e8] to-[#0754c9] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-[#168eea] sm:h-[70px] sm:w-[70px]">
              <span className="text-2xl leading-none sm:text-3xl">{item.icon}</span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="m-0 text-base font-semibold leading-snug text-[#222] transition-colors duration-300 ease-in-out group-hover:text-white sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-0.5 text-base font-semibold leading-snug text-[#222] transition-colors duration-300 ease-in-out group-hover:text-white sm:text-lg">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Standout;