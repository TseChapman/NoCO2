import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '.././index.css';
import { getAuth, signOut } from "firebase/auth";

import icon from '../assets/Icon.png';

function Navbar({setUser}) {
  const location = useLocation();
  console.log(location.pathname);

  const auth = getAuth();
  const navigate = useNavigate(); // add useNavigate hook

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigate("/NoCO2/");
    } catch (error) {
      console.log("Sign out error: ", error);
    }
  }

  return (
    <header class="z-20 w-screen p-3 bg-cabbagePoint fixed">
      <div class="flex md:flex-grow h-12">
        <div class="mr-auto">
          <img class="z-10 mt-2 w-5/6 h-3/4 object-cover" src={icon} alt='Icon'/>
        </div>
        <div class="ml-auto">
          {location.pathname === '/NoCO2/' && (
            <Link to="/NoCO2/signup">
              <button class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-32 text-2xl">Sign Up</button>
            </Link>
          )}
          {location.pathname === '/NoCO2/' && (
            <Link to="/NoCO2/login">
              <button class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-32 text-2xl ml-4">Login</button>
            </Link>
          )}
          {location.pathname === '/NoCO2/dashboard' && (
            <button
              class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-32 text-2xl mr-4"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
          {location.pathname === '/NoCO2/dashboard/activities' && (
            <Link to="/NoCO2/dashboard">
              <button class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-32 text-2xl mr-4">Back</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;