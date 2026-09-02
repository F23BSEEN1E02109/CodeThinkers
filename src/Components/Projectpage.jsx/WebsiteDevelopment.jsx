import React, { useState } from "react";

import cleaning1 from "../../assets/cleaning1.jpg";
import cleaning2 from "../../assets/cleaning2.jpg";
import cleaning3 from "../../assets/cleaning3.jpg";
import cleaning4 from "../../assets/cleaning4.jpg";

import school1 from "../../assets/school1.webp";
import school2 from "../../assets/school2.jpg";
import school3 from "../../assets/school3.jpg";
import school4 from "../../assets/school4.jpg";

import empower1 from "../../assets/empower1.jpg";
import empower2 from "../../assets/empower2.jpg";
import empower3 from "../../assets/empower3.jpg";
import empower4 from "../../assets/empower4.jpg";

import care1 from "../../assets/care1.jpg";
import care2 from "../../assets/care2.jpg";
import care3 from "../../assets/care3.webp";
import care4 from "../../assets/care4.jpg";

import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import service4 from "../../assets/service4.jpg";

const WebsiteDevelopment = () => {
  const initialProjects = [
    {
      title: "Akoya Deluxe Cleaning",
      description:
        "User-friendly, modern design showcasing top resources for managing overtime.",
      mainImage: cleaning1,
      images: [cleaning1, cleaning2, cleaning3, care4],
    },

    {
      title: "Tamakon Comprehensive School",
      description:
        "Tamakon School offers specialized education and rehabilitation for students with diverse abilities across all academic levels.",
      mainImage: school1,
      images: [
        care1,
        school2,
        school3,
        school4,
      ],
    },

    {
      title: "Empower Zone",
      description:
        "Empower Zone is a community-focused organization dedicated to helping New Yorkers access essential government benefits with ease.",
      mainImage: empower1,
      images: [
        care2,
        empower2,
        empower3,
        empower4,
      ],
    },

    {
      title: "Multi-Service Creative Agency",
      description:
        "A fully responsive online store with cart, payment gateway, and admin panel.",
      mainImage: service1,
      images: [
        service1,
        service2,
        empower2,
        service4,
      ],
    },

    {
      title: "Trend Car Care",
      description:
        "A fully responsive online store with cart, payment gateway, and admin panel.",
      mainImage: care1,
      images: [
        school1,
        care2,
        care3,
        school4,
      ],
    },
  ];

  const [projects, setProjects] = useState(initialProjects);

  // Thumbnail click handler
  const handleImageClick = (projectIndex, imageIndex) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, index) => {
        if (index !== projectIndex) {
          return project;
        }

        const clickedImage = project.images[imageIndex];
        const oldMainImage = project.mainImage;

        const updatedImages = [...project.images];
        updatedImages[imageIndex] = oldMainImage;

        return {
          ...project,
          mainImage: clickedImage,
          images: updatedImages,
        };
      })
    );
  };

  return (
    <div className="w-full">
      {/* Projects Stack */}
      <div className="space-y-6 sm:space-y-8">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="grid overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md lg:grid-cols-2"
          >
            {/* Main Image Container */}
            <div className="group w-full aspect-video lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[280px] overflow-hidden bg-gray-100">
              <img
                src={project.mainImage}
                alt={project.title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* 4 Thumbnails */}
                <div className="mt-4 sm:mt-5 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {project.images.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() =>
                        handleImageClick(projectIndex, imageIndex)
                      }
                      className="group h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${imageIndex + 1}`}
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <div className="mt-4 sm:mt-6">
                <button
                  type="button"
                  className="rounded-full bg-blue-700 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-md active:scale-95"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <button
          type="button"
          className="rounded-full bg-blue-700 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-md active:scale-95"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;