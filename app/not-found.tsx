"use client";

import SideBar from "@/components/SideBar";

export default function NotFound() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          404
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Page not found.</p>
      </div>
      <SideBar page="404" />
    </div>
  );
}
