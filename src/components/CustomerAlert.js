import React, { useState, useEffect } from 'react';

const CustomerAlert = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${
        visible ? 'block' : 'hidden'
      } bg-red-500 text-white p-4 fixed top-0 left-0 right-0`}
    >
      {message}
    </div>
  );
};

export default CustomerAlert;
