import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '.././index.css';
import { getAuth, signOut } from "firebase/auth";

//import icon from '../assets/Icon.png';

function Navbar() {
  const icon = require('../assets/Icon.png');
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

  const handleAboutBack = () => {
    console.log("Back to brevious page");
    navigate(-1);
  }

  return (
    <header class="z-20 w-screen p-3 bg-cabbagePoint fixed">
      <div class="flex md:flex-grow h-12">
        <div class="mr-auto flex flex-row items-end">
          <img class="z-10 mt-auto mb-auto sm:w-11 w-7 sm:h-10 h-6 object-cover" src={icon} alt='Icon'/>
          {location.pathname !== '/NoCO2/about' && (
            <Link to="/NoCO2/about">
              <div className="mt-auto sm:ml-5 ml-2 sm:text-2xl text-md text-white text-end hover:text-cloudy hover:underline underline-offset-2">About</div>
            </Link>
          )}
        </div>
        <div class="ml-auto flex flex-row">
          {location.pathname === '/NoCO2/' && (
            <Link to="/NoCO2/signup">
              <button class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-20 sm:w-32 sm:text-2xl text-lg sm:ml-4 ml-2">Sign Up</button>
            </Link>
          )}
          {location.pathname === '/NoCO2/' && (
            <Link to="/NoCO2/login">
              <button class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-20 sm:w-32 sm:text-2xl text-lg sm:ml-4 ml-2">Login</button>
            </Link>
          )}
          {location.pathname === '/NoCO2/about' && (
            <button
              class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-32 text-2xl mr-4"
              onClick={handleAboutBack}
            >
              Back
            </button>
          )}
          {location.pathname === '/NoCO2/dashboard' && (
            <button
              class="bg-cloudy hover:bg-merino h-11 rounded-xl text-merino hover:text-cloudy w-20 sm:w-32 sm:text-2xl text-lg sm:mr-4"
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