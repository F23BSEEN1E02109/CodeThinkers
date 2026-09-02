import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

function Home() {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: true,
    draggable: true,
  };

  return (
    <>
      {/* Flickity Custom Dots & Responsive Slide Overrides */}
      <style>{`
        .flickity-viewport {
          height: 100% !important;
          width: 100% !important;
        }
        .flickity-slider {
          height: 100% !important;
        }
        .flickity-slider > div {
          width: 100% !important;
        }
        .flickity-page-dots {
          bottom: 15px !important;
        }
        .flickity-page-dots .dot {
          background: white !important;
          opacity: 0.7 !important;
        }
        .flickity-page-dots .dot.is-selected {
          background: #00bfff !important;
          opacity: 1 !important;
        }
      `}</style>

      <section className="w-full h-[450px] sm:h-[550px] md:h-[650px] overflow-hidden">
        <Flickity
          className="carousel w-full h-full"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
        >
          {/* Slide 1 */}
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 50, 100, 0.25), rgba(0, 50, 100, 0.25)), url('/src/assets/image.png')`,
            }}
          >
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] m-0 mb-[15px] sm:mb-[25px] font-bold leading-tight">
                Your Vision, <span className="text-[#00bfff]">Our Expertise</span>
              </h1>

              <p className="text-[14px] sm:text-[18px] md:text-[20px] leading-[1.5] mb-[25px] sm:mb-[30px] font-medium">
                Partner with us to build scalable, modern
                <br className="hidden sm:block" />
                {" "}websites that bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-[12px] sm:gap-[15px]">
                <button className="w-full sm:w-auto px-[25px] py-[12px] rounded-[30px] text-[15px] font-semibold cursor-pointer bg-[#00aaff] text-white border-none transition-all duration-300 hover:bg-[#0088cc]">
                  View Our Work
                </button>

                <button className="w-full sm:w-auto px-[25px] py-[12px] rounded-[30px] text-[15px] font-semibold cursor-pointer bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#0066cc]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 50, 100, 0.25), rgba(0, 50, 100, 0.25)), url('/src/assets/image.png')`,
            }}
          >
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] m-0 mb-[15px] sm:mb-[25px] font-bold leading-tight">
                Smart Solutions, <span className="text-[#00bfff]">Better Results</span>
              </h1>

              <p className="text-[14px] sm:text-[18px] md:text-[20px] leading-[1.5] mb-[25px] sm:mb-[30px] font-medium">
                We create modern digital experiences
                <br className="hidden sm:block" />
                {" "}designed to help your business grow.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-[12px] sm:gap-[15px]">
                <button className="w-full sm:w-auto px-[25px] py-[12px] rounded-[30px] text-[15px] font-semibold cursor-pointer bg-[#00aaff] text-white border-none transition-all duration-300 hover:bg-[#0088cc]">
                  View Our Work
                </button>

                <button className="w-full sm:w-auto px-[25px] py-[12px] rounded-[30px] text-[15px] font-semibold cursor-pointer bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#0066cc]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 50, 100, 0.25), rgba(0, 50, 100, 0.25)), url('/src/assets/image.png')`,
            }}
          >
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] m-0 mb-[15px] sm:mb-[25px] font-bold leading-tight">
                Build Your Future, <span className="text-[#00bfff]">With Us</span>
              </h1>

              <p className="text-[14px] sm:text-[18px] md:text-[20px] leading-[1.5] mb-[25px] sm:mb-[30px] font-medium">
                Innovative web and software solutions
                <br className="hidden sm:block" />
                {" "}built around your business needs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-[12px] sm:gap-[15px]">
                <button className="w-full sm:w-auto px-[25px] py-[12px] rounded-[30px] text-[15px] font-semibold cursor-pointer bg-[#00aaff] text-white border-none transition-all duration-300 hover:bg-[#0088cc]">
                  View Our Work
                </button>

                <button className="w-full sm:w-auto px-[25px] py-[12px] rounded-[30px] text-[15px] font-semibold cursor-pointer bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#0066cc]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Flickity>
      </section>
    </>
  );
}

export default Home;