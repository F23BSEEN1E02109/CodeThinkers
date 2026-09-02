function Progress() {
  const progressData = [
    ["4+", "Years of Experience"],
    ["50+", "Satisfied Clients"],
    ["17+", "Countries We Operate"],
    ["$200K+", "Managed Marketing Fund"],
    ["$2.9M+", "Clients Gain"],
  ];

  return (
    <section className="w-full bg-[#f5f6f8] px-4 py-10 sm:px-6 sm:py-16">
      {/* Heading */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-normal tracking-tight text-black sm:text-4xl md:text-5xl">
          Our <span className="text-[#1710b8]">Progress</span>
        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-[#202632] sm:mt-6 sm:text-lg md:text-xl">
          TOJO GLOBAL connects your business directly to your target audience,
          eliminating the need{" "}
          <br className="hidden md:block" />
          to search for clients. With us, they'll find their way to you.
        </p>
      </div>

      {/* Progress Cards */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:mt-14 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
        {progressData.map(([number, title]) => (
          <div
            key={title}
            className="
              flex min-h-[180px] w-full
              cursor-pointer
              flex-col items-center justify-center
              rounded-[18px]
              border border-white
              bg-gradient-to-r from-[#17166f] to-[#405bc5]
              p-5
              text-center
              text-white
              shadow-sm
              transition-all duration-300 ease-in-out
              hover:-translate-y-2
              hover:shadow-2xl
              sm:min-h-[200px]
              lg:hover:-translate-y-4
            "
          >
            <h3 className="text-3xl font-semibold sm:text-4xl lg:text-4xl xl:text-5xl">
              {number}
            </h3>

            <p className="mt-3 max-w-[220px] text-sm leading-snug sm:mt-4 sm:text-base md:text-lg">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Progress;