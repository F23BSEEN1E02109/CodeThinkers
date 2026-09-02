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

const AppProjects = () => {
  const initialProjects = [
    {
      title: "Sports Tracker: Run Bike Hike",
      description:
        "The ultimate fitness tracking app for Outdoor Adventures and fitness enthusiasts. Track your activities, routes, and sports with powerful tools and insights.",
      mainImage: cleaning3,
      images: [school2, care4, service1, cleaning1],
    },

    {
      title: "SuperSports",
      description:
        "Welcome to SuperSports, your ultimate destination for all your sports experiences. Find everything you need to stay connected with your favorite sports and teams.",
      mainImage: empower1,
      images: [cleaning4, service3, school1, care2],
    },

    {
      title: "Get Goari - Rental Car Sharing",
      description:
        "Get Goari is a car rental car sharing platform, connecting car owners with renters in a convenient and simple environment. Book your favorite vehicle and enjoy a comfortable journey.",
      mainImage: care2,
      images: [service4, empower4, cleaning1, school3],
    },

    {
      title: "Pure Fitness Africa Mobile App",
      description:
        "Join the most exciting fitness community in Africa and unlock your potential. Discover workouts, nutrition plans, and everything you need for a healthier lifestyle.",
      mainImage: school4,
      images: [care3, cleaning2, service2, empower2],
    },

    {
      title: "Qatar Sale",
      description:
        "Qatar Sale is the first and biggest online local shopping app with amazing products and services for everyone.",
      mainImage: service1,
      images: [empower3, school3, cleaning4, care1],
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

export default AppProjects;