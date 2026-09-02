import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../../assets/codethinker.webp";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#09024f] to-[#05255a] text-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-8 sm:gap-10 lg:gap-12">
        
        {/* About Section */}
        <div className="flex flex-col">
          <img src={logo} alt="Codes Thinker" className="w-[140px] sm:w-[150px] h-auto mb-4" />
          <p className="max-w-[350px] text-sm sm:text-[15px] leading-relaxed text-gray-200 font-normal">
            We offer a range of cutting-edge web development and software solutions
            tailored to meet client needs. Our experienced team delivers
            collaboratively and efficiently.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="w-9 h-9 bg-[#0795f5] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#075eea] hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-[#0795f5] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#075eea] hover:-translate-y-1"
              aria-label="Twitter"
            >
              <FaTwitter className="text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-[#0795f5] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#075eea] hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-[#0795f5] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#075eea] hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col">
          <h3 className="text-lg mb-4 font-bold tracking-wide">Services</h3>
          <ul className="flex flex-col gap-2.5 p-0 m-0 list-none text-sm text-gray-200">
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Business Intelligence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Virtual Workstation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Network Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                IT Strategy
              </a>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col">
          <h3 className="text-lg mb-4 font-bold tracking-wide">Company</h3>
          <ul className="flex flex-col gap-2.5 p-0 m-0 list-none text-sm text-gray-200">
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Latest Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                IT Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Team Members
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00e5ff] transition-colors duration-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <h3 className="text-lg mb-4 font-bold tracking-wide">Contact Info</h3>

          <div className="flex items-start gap-3 mb-3.5">
            <span className="w-7 h-7 bg-[#0795f5] rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
              <FaPhone />
            </span>
            <p className="text-sm leading-snug font-medium text-gray-200">+44 7470 103120</p>
          </div>

          <div className="flex items-start gap-3 mb-3.5">
            <span className="w-7 h-7 bg-[#0795f5] rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
              <FaEnvelope />
            </span>
            <p className="text-sm leading-snug font-medium text-gray-200 break-all">info@codesthinker.com</p>
          </div>

          <div className="flex items-start gap-3 mb-3.5">
            <span className="w-7 h-7 bg-[#0795f5] rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
              <FaMapMarkerAlt />
            </span>
            <p className="text-sm leading-snug font-medium text-gray-200">
              Bartle House 9 Oxford Court, Manchester M2 3WQ, United Kingdom
              <span className="block text-xs text-gray-300 mt-0.5">(Regional Office)</span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-7 h-7 bg-[#0795f5] rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
              <FaMapMarkerAlt />
            </span>
            <p className="text-sm leading-snug font-medium text-gray-200">
              Hassan Manzil Basement Goheer Town Bahawalpur
              <span className="block text-xs text-gray-300 mt-0.5">(Global Delivery Center)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1200px] mx-auto mt-10 pt-5 border-t border-white/20 text-center">
        <p className="text-xs text-gray-300 font-medium">
          © 2026–All Rights Reserved - By{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-[linear-gradient(110deg,#00e5ff,45%,#ffffff,55%,#00e5ff)] bg-[length:200%_100%] animate-pulse drop-shadow-[0_0_10px_rgba(0,229,255,0.7)] tracking-wider">
            Hamad Khan
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;