import React, { useState, useEffect } from 'react';

const CustomAlert = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  if (!visible) {
    return null;
  }

  return (
    <div className="w-2/4 rounded-2xl p-1 bg-red-500 z-30 fixed top-3 left-0 right-0 mx-auto slide-down-animation">
      <div className="w-full h-full bg-merino rounded-2xl p-4 text-black text-3xl">
        {message}
      </div>
    </div>
  );
};

export default CustomAlert;
