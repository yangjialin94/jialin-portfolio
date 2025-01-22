'use client';

import React from 'react';

// import projects from '@/data/projects.json';

export default function Projects() {
  return (
    <main className="flex flex-col items-start justify-center flex-1 gap-10 px-8 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl font-bold">My Projects</h2>

      {/* Projects */}
      <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
            <p className="mt-1 text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))} */}
      </div>
    </main>
  );
}
