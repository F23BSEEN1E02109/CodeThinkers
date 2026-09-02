import React, { useState } from "react";
import codethinker from "../../../assets/codethinker.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#071b55] text-white relative z-50 shadow-md">

      {/* ================= MAIN NAVBAR ================= */}
      <div className="w-full min-h-[75px] md:min-h-[82px] px-5 sm:px-7 md:px-10 lg:px-12 flex items-center">

        {/* LOGO */}
        <div className="flex-shrink-0">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            <img
              src={codethinker}
              alt="Code Thinker"
              className="
                w-[175px]
                h-[60px]
                sm:w-[175px]
                sm:h-[60px]
                md:w-[175px]
                md:h-[55px]
                object-contain
                cursor-pointer
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </a>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex flex-1 justify-center">

          <div className="flex items-center gap-5 lg:gap-8 xl:gap-10">

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="
                  group
                  relative
                  inline-block
                  text-white
                  text-[15px]
                  lg:text-[16px]
                  xl:text-[17px]
                  font-semibold
                  py-4
                  px-1
                  transition-all
                  duration-300
                  hover:text-[#dee912]
                "
              >
                {item.name}

                {/* CENTER SE FULL LINE */}
                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    bottom-1
                    h-[3px]
                    w-0
                    rounded-full
                    bg-[#dee912]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </a>
            ))}

          </div>

        </div>

        {/* ================= DESKTOP LOGIN ================= */}
        <div className="hidden md:flex flex-shrink-0">

          <a
            href="/login"
            className="
              inline-flex
              items-center
              justify-center
              min-w-[92px]
              lg:min-w-[100px]
              px-5
              lg:px-6
              py-2.5
              rounded-full
              border
              border-[#7fa8ff]
              text-white
              text-[15px]
              lg:text-[16px]
              font-semibold
              transition-all
              duration-300
              hover:bg-[#1455c0]
              hover:border-[#1455c0]
              hover:scale-105
              hover:shadow-lg
            "
          >
            Login
          </a>

        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <div className="md:hidden ml-auto">

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="
              w-[45px]
              h-[45px]
              rounded-lg
              border
              border-[#7fa8ff]
              flex
              flex-col
              items-center
              justify-center
              gap-[6px]
              transition-all
              duration-300
              hover:bg-[#1455c0]
            "
          >

            {/* TOP LINE */}
            <span
              className={`
                block
                w-6
                h-[2px]
                bg-white
                rounded-full
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "rotate-45 translate-y-[8px]"
                    : ""
                }
              `}
            ></span>

            {/* MIDDLE LINE */}
            <span
              className={`
                block
                w-6
                h-[2px]
                bg-white
                rounded-full
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            ></span>

            {/* BOTTOM LINE */}
            <span
              className={`
                block
                w-6
                h-[2px]
                bg-white
                rounded-full
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[8px]"
                    : ""
                }
              `}
            ></span>

          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="border-t border-blue-900 px-6 py-4">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="
                group
                relative
                block
                w-fit
                mx-auto
                py-3
                text-center
                text-[16px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:text-[#4d9cff]
              "
            >
              {item.name}

              {/* MOBILE HOVER LINE */}
              <span
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  bottom-1
                  h-[2px]
                  w-0
                  rounded-full
                  bg-[#4d9cff]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              ></span>

            </a>
          ))}

          {/* MOBILE LOGIN */}
          <div className="flex justify-center pt-3 pb-2">

            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="
                inline-flex
                items-center
                justify-center
                min-w-[105px]
                px-6
                py-2.5
                rounded-full
                border
                border-[#7fa8ff]
                text-white
                text-[16px]
                font-semibold
                transition-all
                duration-300
                hover:bg-[#1455c0]
                hover:border-[#1455c0]
                hover:scale-105
                hover:shadow-lg
              "
            >
              Login
            </a>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;