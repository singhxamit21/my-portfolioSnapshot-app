import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-2xl shadow-md border border-gray-200 bg-white ${className}`}>
      {children}
    </div>
  );
};