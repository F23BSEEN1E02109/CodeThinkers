import React from "react";

import WebsiteDevelopment from "./WebsiteDevelopment";
import UIUX from "./UIUX";
import AppProjects from "./AppProjects";
import WordPress from "./WordPress";
import SEO from "./SEO";

const AllProjects = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 overflow-hidden">

      {/* Website Development */}
      <WebsiteDevelopment />

      {/* UI/UX */}
      <UIUX />

      {/* App */}
      <AppProjects />

      {/* WordPress */}
      <WordPress />

      {/* SEO */}
      <SEO />

    </div>
  );
};

export default AllProjects;