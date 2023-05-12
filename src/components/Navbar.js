import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '.././index.css';

import icon from '../assets/Icon.png';

function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header class="z-20 w-screen p-3 bg-cabbagePoint fixed">
      <div class="flex md:flex-grow h-12">
        <div class="mr-auto">
          <img class="z-10 mt-2 w-5/6 h-3/4 object-cover" src={icon} alt='Icon'/>
        </div>
        <div class="ml-auto">
          {location.pathname === '/NoCO2/' && (
            <Link to="/NoCO2/signup">
              <button class="bg-cloudy h-11 rounded-xl text-merino w-32 text-2xl">Sign Up</button>
            </Link>
          )}
          {location.pathname === '/NoCO2/' && (
            <Link to="/NoCO2/login">
              <button class="bg-cloudy h-11 rounded-xl text-merino w-32 text-2xl ml-4">Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;