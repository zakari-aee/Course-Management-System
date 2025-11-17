import React, { useState, useEffect } from 'react';
const Toast = ({ message, type='success', isVisible, onHide }) => {
  const [show, setShow] = useState(isVisible);
  const baseStyle = "fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg flex items-center transition-all duration-300";
  const variants = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  };
  useEffect(() => {
    if(isVisible){ setShow(true); const timer = setTimeout(()=>{setShow(false); onHide && onHide();},3000); return()=>clearTimeout(timer);}
    else setShow(false);
  }, [isVisible, onHide]);
  if(!show) return null;
  return <div className={`${baseStyle} ${variants[type]}`}>{message}</div>;
};
export default Toast;
