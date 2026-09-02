import building from "../../assets/building.webp";

const Building = () => {
  return (
    <section className="w-full bg-white mt-6 sm:mt-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 md:gap-12 lg:flex-row lg:gap-16 lg:px-12 lg:py-16">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-3xl font-medium leading-tight text-[#222] sm:text-4xl md:text-5xl">
            Building{" "}
            <span className="text-[#0758c9]">
              Future-Ready
            </span>
            <br className="hidden sm:inline" />{" "}
            <span className="text-[#0758c9]">
              Software
            </span>
          </h1>

          <p className="mt-4 max-w-[540px] text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base md:text-[17px] md:leading-[1.6]">
            We are a team of passionate developers, designers, and thinkers
            building scalable solutions for tomorrow. At{" "}
            <span className="text-[#0758c9] font-medium">[Codes Thinker]</span>, we don’t
            just build software — we craft scalable, intelligent solutions
            that drive real-world impact. Our team of developers, designers,
            and strategists work together to deliver innovative digital
            products tailored for tomorrow’s challenges. Rooted in
            collaboration, quality, and forward thinking, we’re committed to
            helping businesses grow through technology.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="h-64 w-full max-w-[560px] overflow-hidden rounded-2xl border border-gray-100 bg-white sm:h-80 md:h-96 lg:h-[400px]">
            <img
              src={building}
              alt="Building Future-Ready Software"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Building;