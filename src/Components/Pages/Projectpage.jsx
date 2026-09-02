import React, { useState } from "react";

import AllProjects from "../Projectpage.jsx/AllProjects";
import WebsiteDevelopment from "../Projectpage.jsx/WebsiteDevelopment";
import UIUX from "../Projectpage.jsx/UIUX";
import AppProjects from "../Projectpage.jsx/AppProjects";
import WordPress from "../Projectpage.jsx/WordPress";
import SEO from "../Projectpage.jsx/SEO";

const Projectpage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Website Development",
    "UI/UX",
    "App",
    "WordPress",
    "SEO",
  ];

  const renderProjects = () => {
    switch (activeFilter) {
      case "Website Development":
        return <WebsiteDevelopment />;

      case "UI/UX":
        return <UIUX />;

      case "App":
        return <AppProjects />;

      case "WordPress":
        return <WordPress />;

      case "SEO":
        return <SEO />;

      default:
        return <AllProjects />;
    }
  };

  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 md:px-12 lg:px-20 mt-10">

      {/* Heading */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Project Section
        </h2>

        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Explore a range of projects we’ve worked on across web, mobile, and
          design.
        </p>
      </div>

      {/* Filters */}
      <div className="mx-auto mt-7 flex max-w-6xl flex-wrap items-center justify-center gap-2 sm:gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-md px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-5 ${
              activeFilter === filter
                ? "bg-blue-700 text-white shadow-md"
                : "bg-transparent text-gray-800 hover:text-blue-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Selected Category */}
      <div className="mx-auto mt-8 max-w-6xl">
        {renderProjects()}
      </div>

    </section>
  );
};

export default Projectpage;