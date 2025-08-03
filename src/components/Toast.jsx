import React,{memo } from 'react';

const Toast = memo(({ message, type = 'info' }) => {
  const baseStyle = 'fixed top-5 right-5 px-4 py-2 rounded shadow transition-all z-50';
  const typeStyle = {
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
    success: 'bg-green-100 text-green-800 border border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    error: 'bg-red-100 text-red-800 border border-red-300',
  };

  return (
    <div className={`${baseStyle} ${typeStyle[type]}`}>
      {message}
    </div>
  );
});

export default Toast;
