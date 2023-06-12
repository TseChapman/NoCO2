import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/BackgroundImage.jpg';
import logo from '../../assets/Logo2.png';
import '../../index.css';

export class Main extends Component {
  render() {
    return (
      <div class="min-h-max">
        <img class="z-0 h-screen w-screen object-cover object-center absolute" src={backgroundImage} alt='Background'/>
        <div class="flex flex-col justify-center items-center h-screen w-full overflow-y-auto">
          <img class="z-10 mt-16 sm:w-2/4 sm:h-2/6 object-contain animate-slide-in-delay-1" src={logo} alt='Logo'/>
          <div class="z-10 mt-4 w-4/5 lg:text-7xl md:text-6xl text-5xl text-center text-cabbagePoint animate-slide-in-delay-2">
            Shape the Future!
          </div>
          <div class="z-10 w-4/5 lg:text-7xl md:text-6xl text-5xl text-center text-cabbagePoint animate-slide-in-delay-3">
            Lets hit net zero CO2 in 2050
          </div>
          <div class="w-full">
            <Link to="/NoCO2/signup" class="z-10 flex flex-col justify-center items-center">
              <button class="z-10 w-5/12 mt-12 bg-limeGreen hover:bg-merino rounded-2xl text-merino hover:text-limeGreen h-20 lg:text-5xl md:text-4xl text-3xl ml-4 animate-slide-in-delay-4">Lets Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}