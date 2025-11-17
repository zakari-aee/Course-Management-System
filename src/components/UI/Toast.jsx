import React, { useEffect, useState } from 'react';
import Button from './Button';

const Toast = ({ message, type = 'success', isVisible, onHide }) => {
  const [show, setShow] = useState(isVisible);

  const colors = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  };

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onHide && onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!show) return null;

  return (
    <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg ${colors[type]} flex items-center space-x-3`}>
      <span>{message}</span>
      <Button onClick={() => setShow(false)} size="sm" variant="secondary">X</Button>
    </div>
  );
};

export default Toast;
