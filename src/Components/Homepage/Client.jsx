import React, { useEffect, useState } from "react";

const clients = [
  {
    name: "Muhammad Waseem",
    role: "Customer",
    review:
      "Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly recommended for web solutions.",
  },
  {
    name: "BMX Adventure",
    role: "Customer",
    review:
      "BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!",
  },
];

function Client() {
  const [activeClient, setActiveClient] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const client = clients[activeClient];

  return (
    <section className="w-full bg-[#08004f] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-10">

        {/* LEFT SIDE */}
        <div className="flex w-full items-center justify-center text-center lg:w-[35%] lg:text-left">
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-yellow-400">Clients,</span>
            <br />
            In Their Own Words
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full flex-col items-center lg:w-[65%]">

          {/* REVIEW CARD */}
          <div
            key={activeClient}
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-[#120b8f]
              to-[#10066d]
              p-5
              text-white
              shadow-lg
              transition-all
              duration-500
              sm:p-7
              md:px-8
              md:py-8
            "
          >

            {/* STARS */}
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="text-2xl font-semibold sm:text-3xl">
                5.0
              </span>

              <div className="flex gap-1.5 text-2xl text-yellow-400 sm:gap-2 sm:text-3xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* CLIENT INFO */}
            <div className="mt-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-5 sm:text-left">

              {/* AVATAR */}
              <div
                className="
                  flex
                  h-[100px]
                  w-[100px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white
                  bg-white
                  text-5xl
                  sm:h-[125px]
                  sm:w-[125px]
                  sm:text-6xl
                "
              >
                🧑‍💼
              </div>

              <div>
                <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                  {client.name}
                </h3>

                <p className="mt-1 text-base text-gray-300 sm:text-lg">
                  {client.role}
                </p>
              </div>
            </div>

            {/* REVIEW */}
            <p className="mt-6 text-center text-base leading-6 text-white sm:text-left sm:text-lg md:text-xl md:leading-7">
              "{client.review}"
            </p>

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-3">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveClient(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeClient === index
                      ? "w-6 bg-yellow-400"
                      : "bg-[#15115f] hover:bg-yellow-400/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ADD REVIEW BUTTON */}
          <button
            className="
              group
              mt-8
              rounded-2xl
              bg-yellow-400
              px-7
              py-4
              text-lg
              font-semibold
              text-black
              transition-all
              duration-300
              ease-in-out
              hover:-translate-y-1
              hover:bg-gradient-to-r
              hover:from-yellow-400
              hover:to-[#10105f]
              hover:text-white
              hover:shadow-xl
              cursor-pointer
              sm:mt-10
              sm:px-9
              sm:py-5
              sm:text-xl
            "
          >
            Add Your Reviews
          </button>

        </div>
      </div>
    </section>
  );
}

export default Client;