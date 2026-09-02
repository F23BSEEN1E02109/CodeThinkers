import { useState } from "react";
import img1 from "../../assets/img1.webp";

const faqData = [
  {
    question: "What Services do you offer?",
    answer:
      "We offer custom development, web and mobile applications, blockchain solutions, digital marketing, graphics and visual design, video editing, and content writing.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the size and requirements of the project. After discussing your requirements, we provide you with a clear estimated timeline.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. We provide post-launch support to make sure your project continues to work smoothly and any issues are handled quickly.",
  },
  {
    question: "Can I get a custom design for my brand?",
    answer:
      "Absolutely. We can create a custom design that matches your brand identity, goals, audience, and overall business requirements.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply contact us and tell us about your project. Our team will discuss your requirements, suggest the best solution, and guide you through the next steps.",
  },
];

function Frequently() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f8f9fb] px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-20">

      {/* HEADING */}
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-base font-normal text-[#27344c] sm:text-lg md:text-xl">
          Have You Any Question
        </p>

        <h2 className="mt-1 text-3xl font-medium leading-tight text-black sm:text-4xl md:text-5xl">
          <span className="text-[#1710b8]">
            Frequently
          </span>{" "}
          Asked Questions
        </h2>
      </div>

      {/* CONTENT */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-start gap-8 sm:mt-12 lg:mt-20 lg:grid-cols-[1fr_630px] lg:gap-16">

        {/* LEFT SIDE FAQ */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
                      : ""
                  }
                `}
              >

                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    min-h-[64px]
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-3
                    text-left
                    transition-all
                    duration-300
                    hover:text-[#1710b8]
                    sm:min-h-[74px]
                    sm:px-5
                  "
                >
                  <span className="text-base font-semibold text-black sm:text-lg md:text-xl">
                    {faq.question}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`
                      flex
                      shrink-0
                      items-center
                      justify-center
                      text-xl
                      text-black
                      transition-transform
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180 text-[#1710b8]"
                          : ""
                      }
                    `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:h-[22px] sm:w-[22px]"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-6 text-gray-600 sm:px-5 sm:pb-5 sm:text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={img1}
            alt="Customer Support"
            className="
              h-[320px]
              w-full
              rounded-xl
              object-cover
              transition-transform
              duration-500
              hover:scale-[1.02]
              sm:h-[400px]
              lg:h-[500px]
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Frequently;