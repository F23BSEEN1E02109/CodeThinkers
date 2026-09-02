import image2 from "../../assets/image2.png";
import { FaLeaf, FaShieldAlt } from "react-icons/fa";
import { MdOutlineCropSquare } from "react-icons/md";

function Value() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">

          <h2 className="text-3xl font-normal text-black sm:text-4xl md:text-5xl">
            OUR <span className="text-blue-600">VALUE</span>
          </h2>

          <p className="mt-2 text-base text-gray-700 sm:text-lg md:text-xl">
            A melting pot for the best ideas
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8">
            {/* INTEGRITY */}
            <div className="flex items-start gap-4 sm:items-center sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10174f] text-xl text-blue-500 sm:h-[70px] sm:w-[70px] sm:text-3xl">
                <FaLeaf />
              </div>

              <div>
                <h3 className="text-lg font-medium text-black sm:text-2xl">
                  Integrity
                </h3>

                <p className="mt-1 text-sm text-gray-600 sm:text-base md:text-lg">
                  We hold ourselves to a strong ethical and moral code.
                </p>
              </div>
            </div>

            {/* TRUST */}
            <div className="flex items-start gap-4 sm:items-center sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10174f] text-xl text-blue-500 sm:h-[70px] sm:w-[70px] sm:text-3xl">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="text-lg font-medium text-black sm:text-2xl">
                  Trust
                </h3>

                <p className="mt-1 text-sm text-gray-600 sm:text-base md:text-lg">
                  We are dependable, loyal, and hardworking to achieve the same goal.
                </p>
              </div>
            </div>

            {/* EXCELLENCE */}
            <div className="flex items-start gap-4 sm:items-center sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10174f] text-xl text-blue-500 sm:h-[70px] sm:w-[70px] sm:text-3xl">
                <MdOutlineCropSquare />
              </div>

              <div>
                <h3 className="text-lg font-medium text-black sm:text-2xl">
                  Excellence
                </h3>

                <p className="mt-1 text-sm text-gray-600 sm:text-base md:text-lg">
                  We consistently strive to deliver high-quality work without room for error.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={image2}
            alt="Our Value"
            className="w-full max-w-[500px] rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Value;