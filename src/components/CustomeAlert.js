import React, { useState, useEffect } from 'react';

const CustomeAlert = ({ message }) => {
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
    <div class="w-2/4 rounded-2xl p-2 bg-red-500 z-30 fixed top-3 left-0 right-0 mx-auto">
      <div class="w-full h-full bg-white rounded-2xl p-4 text-black text-2xl">
        {message}
      </div>
    </div>
  );
};

export default CustomeAlert;
