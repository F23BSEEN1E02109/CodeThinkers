import React from "react";
import {
  FaPhoneAlt,
  FaComments,
  FaClock,
} from "react-icons/fa";

function Collaborate() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#f8f9fb] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20">

      {/* HEADING */}
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-lg text-[#26344f] sm:text-xl">
          let's Talk
        </p>

        <h2 className="mt-1 text-3xl font-medium tracking-tight text-[#18253d] sm:text-4xl md:text-5xl">
          <span className="text-[#1710b8]">
            Let's Collaborate
          </span>{" "}
          and Innovate
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-8 sm:gap-12 lg:gap-16">

          {/* DISCUSS YOUR PROJECT */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1710b8] text-xl text-white sm:h-16 sm:w-16 sm:text-2xl">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black sm:text-2xl">
                Discuss Your Project
              </h3>

              <p className="mt-1 max-w-md text-base leading-7 text-[#566176] sm:text-xl sm:leading-8">
                Invite clients to share their ideas and
                requirements, fostering an open dialogue about
                potential collaborations.
              </p>
            </div>
          </div>

          {/* FREE CONSULTATION */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1710b8] text-xl text-white sm:h-16 sm:w-16 sm:text-2xl">
              <FaComments />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black sm:text-2xl">
                Get a Free Consultation
              </h3>

              <p className="mt-1 max-w-md text-base leading-7 text-[#566176] sm:text-xl sm:leading-8">
                Offer a no-obligation consultation to understand
                the client's needs and propose tailored solutions.
              </p>
            </div>
          </div>

          {/* REACH US */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1710b8] text-xl text-white sm:h-16 sm:w-16 sm:text-2xl">
              <FaClock />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black sm:text-2xl">
                Reach Us Anytime
              </h3>

              <p className="mt-1 max-w-md text-base leading-7 text-[#566176] sm:text-xl sm:leading-8">
                Provide multiple contact channels, ensuring
                clients can connect with you at their
                convenience.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="rounded-2xl bg-white px-5 py-6 shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7">

          <h3 className="text-center text-xl font-bold text-black sm:text-2xl">
            CONTACT US
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-3"
          >

            {/* NAME + PHONE */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  h-12
                  w-full
                  rounded-md
                  border-2
                  border-black
                  bg-white
                  px-3
                  text-base
                  text-black
                  outline-none
                  placeholder:text-gray-500
                  focus:border-[#1710b8]
                  sm:h-14
                  sm:text-lg
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  h-12
                  w-full
                  rounded-md
                  border-2
                  border-black
                  bg-white
                  px-3
                  text-base
                  text-black
                  outline-none
                  placeholder:text-gray-500
                  focus:border-[#1710b8]
                  sm:h-14
                  sm:text-lg
                "
              />

            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="
                mt-4
                h-12
                w-full
                rounded-md
                border-2
                border-black
                bg-white
                px-3
                text-base
                text-black
                outline-none
                placeholder:text-gray-500
                focus:border-[#1710b8]
                sm:h-14
                sm:text-lg
              "
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Message"
              rows="5"
              className="
                mt-4
                w-full
                resize-y
                rounded-md
                border-2
                border-black
                bg-white
                px-3
                py-3
                text-base
                text-black
                outline-none
                placeholder:text-gray-500
                focus:border-[#1710b8]
                sm:text-lg
              "
            />

            {/* SEND BUTTON */}
            <div className="mt-6 flex justify-center sm:justify-end">
              <button
                type="submit"
                className="
                  w-full
                  cursor-pointer
                  rounded-full
                  bg-[#130080]
                  px-12
                  py-3.5
                  text-base
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  ease-in-out
                  hover:-translate-y-1
                  hover:bg-gradient-to-r
                  hover:from-[#ffe000]
                  hover:to-[#130080]
                  hover:text-white
                  hover:shadow-xl
                  sm:w-auto
                  sm:py-4
                  sm:text-lg
                "
              >
                Send
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Collaborate;