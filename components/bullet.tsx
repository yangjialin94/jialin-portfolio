'use client';

import React, { ReactNode } from 'react';

interface BulletProps {
  color?: 'red' | 'blue' | 'green' | 'yellow';
  children: ReactNode;
}

const Bullet = ({ color = 'blue', children }: BulletProps) => {
  const colorClass = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  }[color];

  return (
    <div className="flex items-center gap-2">
      <div className={`mb-1 h-2 w-2 rounded-full ${colorClass}`} />
      <span className="text-gray-800 dark:text-gray-300">{children}</span>
    </div>
  );
};

export default Bullet;
