import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Touch() {
  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16">
      
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-10 sm:mb-16 mt-4 sm:mt-8">
        Get In <span className="text-blue-700">Touch</span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* LEFT SIDE: CONTACT INFO */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-900 mb-4 sm:mb-6 max-w-md">
              Ready To Turn Your Vision Into Reality?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-8">
              Want to blast your business off like a rocket? Tojo Global's got a
              secret weapon for you: an amazing custom Marketing, Management,
              Design, Development & Crypto listing plan which will turn heads and
              grow your business faster than ever.
            </p>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-blue-700 flex items-center justify-center text-white -skew-y-6">
                <FaPhone className="skew-y-6 text-base sm:text-lg" />
              </div>
              <a 
                href="tel:+447470103120" 
                className="text-gray-800 text-sm sm:text-base font-medium hover:text-blue-700 transition-colors"
              >
                +44 7470 103120
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-blue-700 flex items-center justify-center text-white -skew-y-6">
                <FaEnvelope className="skew-y-6 text-base sm:text-lg" />
              </div>
              <a 
                href="mailto:info@codesthinker.com" 
                className="text-gray-800 text-sm sm:text-base font-medium hover:text-blue-700 transition-colors break-all"
              >
                info@codesthinker.com
              </a>
            </div>

            {/* Address 1 */}
            <div className="flex items-start gap-4 mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-blue-700 flex items-center justify-center text-white -skew-y-6">
                <FaMapMarkerAlt className="skew-y-6 text-base sm:text-lg" />
              </div>
              <span className="text-gray-800 text-sm sm:text-base font-medium leading-snug pt-1">
                Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom (Regional Office)
              </span>
            </div>

            {/* Address 2 */}
            <div className="flex items-start gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-blue-700 flex items-center justify-center text-white -skew-y-6">
                <FaMapMarkerAlt className="skew-y-6 text-base sm:text-lg" />
              </div>
              <span className="text-gray-800 text-sm sm:text-base font-medium leading-snug pt-1">
                Hassan Manzil Basement Goheer Town Bahawalpur (Global Delivery Center)
              </span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 sm:gap-4 pt-2">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaLinkedinIn />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-700 border border-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-blue-700 hover:scale-110 active:scale-95"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-5 sm:mb-6">
            Book a Free Consultation
          </h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full h-11 sm:h-12 border border-gray-400 rounded-md px-4 outline-none text-gray-800 text-sm placeholder-gray-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                placeholder="Working Email"
                required
                className="w-full h-11 sm:h-12 border border-gray-400 rounded-md px-4 outline-none text-gray-800 text-sm placeholder-gray-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your Subject"
                className="w-full h-11 sm:h-12 border border-gray-400 rounded-md px-4 outline-none text-gray-800 text-sm placeholder-gray-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Describe your message here"
                className="w-full border border-gray-400 rounded-md px-4 py-3 outline-none resize-none text-gray-800 text-sm placeholder-gray-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all duration-300"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="
                w-fit
                px-6 py-3
                mt-2
                rounded-full
                bg-blue-700
                text-white
                text-xs sm:text-sm
                font-bold
                flex items-center gap-3
                transition-all duration-300
                hover:bg-white
                hover:text-blue-700
                border border-blue-700
                hover:scale-105
                active:scale-95
                cursor-pointer
              "
            >
              SUBMIT
              <FaArrowRight />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Touch;