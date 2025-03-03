'use client';

import React from 'react';

interface BulletProps {
  color?: 'red' | 'blue' | 'green' | 'yellow';
  description: string;
}

const Bullet = ({ color = 'blue', description }: BulletProps) => {
  const colorClassName = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  }[color];

  return (
    <div className="flex w-full items-center gap-2">
      {/* Fixed-size dot aligned to the first line center */}
      <div className={`min-h-2 min-w-2 rounded-full ${colorClassName}`} />

      {/* Description text stays aligned */}
      <div className="leading-normal text-gray-800 dark:text-gray-300">
        {description}
      </div>
    </div>
  );
};

export default Bullet;
