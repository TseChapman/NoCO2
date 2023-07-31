import React from 'react';
import { useState } from 'react';
import backgroundImage from '../../assets/AboutBg.jpg';
import aboutCtse from  '../../assets/About/Aboutctse.jpg';
import aboutLuc from '../../assets/About/Aboutluc.jpg';
import githubIcon from '../../assets/About/Github_black.png';
import linkedInIcon from '../../assets/About/LinkedIN.png';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const icon = require('../../assets/noco2-logo.png');

  const animationDelay = 0.2;
  const animationDuration = 1;

  function handleLoaded() {
    setIsLoaded(true);
  }

  return (
    <div
      className="w-full min-h-screen bg-repeat bg-contain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div class="text-7xl text-black/0 mb-3">
        empty
      </div>
      <div class="px-4">
        <div
          class="bg-matrix rounded-xl p-2 animate-slide-up-delay-1"
          style={{
            opacity: `${isLoaded ? '100' : '0'}`,
          }}
          onLoad={handleLoaded}
        >
          <div className="w-full h-2/4 md:h-52 flex flex-col md:flex-row rounded-xl overflow-hidden">
            <div className="w-full md:w-2/5 relative bg-white">
              <div className="md:absolute inset-0 shadow-inner shadow-gray-300 p-2 flex items-center justify-center">
                <img className="w-4/5 md:w-full h-4/5 md:h-full object-contain" src={icon} alt="Icon" />
              </div>
            </div>
            <div className="w-full md:w-3/5 p-2 bg-cloudy">
              <span className="text-white sm:text-2xl text-lg">
                NoCO2 is a React app that allows users to monitor their CO2 emissions.
                The goal of this project is to help users keep an eye on their daily CO2 emissions and contribute to achieving the United States' net-zero CO2 emissions target by 2050.
              </span>
            </div>
          </div>
          <div class="w-full flex flex-col md:flex-row mt-4 justify-around">
            <a class="p-1 rounded-xl bg-white my-2 md:my-0 mx-2 flex flex-row justify-center items-center hover:bg-slate-300 sm:text-2xl text-lg" href="https://github.com/TseChapman/NoCO2"><img class="sm:w-10 w-5 sm:h-10 h-5 rounded-xl mr-2" src={githubIcon} alt='Cheuk Hang Tse Github'/>Front-End Repository</a>
            <a class="p-1 rounded-xl bg-white my-2 md:my-0 mx-2 flex flex-row justify-center items-center hover:bg-slate-300 sm:text-2xl text-lg" href="https://github.com/luc779/BackEndFunctions"><img class="sm:w-10 w-5 sm:h-10 h-5 rounded-xl mr-2" src={githubIcon} alt='Cheuk Hang Tse Github'/>Back-End Repository</a>
          </div>
        </div>
        <div
          class="bg-matrix rounded-xl p-2 mt-4 animate-slide-up-delay-2"
          style={{
            opacity: `${isLoaded ? '100' : '0'}`,
          }}
          onLoad={handleLoaded}
        >
          <div class="w-full font-bold text-merino sm:text-6xl text-4xl flex justify-center">Developers</div>
          <hr class="z-10 w-full mt-4 border-merino" />
          <div class="flex flex-col md:flex-row justify-center md:justify-around">
            <div
              class="flex flex-col bg-merino rounded-xl sm:w-80 md:w-2/5 p-2 justify-center items-center mx-auto my-4 md:m-4 animate-slide-left"
              style={{
                animationDelay: `${1}s`,
                animationDuration: `${animationDuration}s`,
                opacity: `${isLoaded ? '100' : '0'}`,
              }}
              onLoad={handleLoaded}
            >
              <img class="h-auto w-4/5 rounded-full" src={aboutCtse} alt='Cheuk Hang Tse img' />
              <div class="sm:text-3xl text-xl">Cheuk Hang Tse</div>
              <div class="flex flex-row w-full justify-center items-center">
                <div class="sm:text-xl mr-2">Full-stack Developer</div>
                <a class="p-1" href="https://github.com/TseChapman"><img class="sm:w-10 w-5 sm:h-10 h-5 rounded-xl hover:bg-slate-300" src={githubIcon} alt='Cheuk Hang Tse Github'/></a>
                <a class="p-1" href="https://www.linkedin.com/in/cheuk-hang-chapman-tse/"><img class="sm:w-10 w-5 sm:h-10 h-5 rounded-xl hover:bg-slate-300" src={linkedInIcon} alt='Cheuk Hang Tse LinkedIn'/></a>
              </div>
            </div>
            <div
              class="flex flex-col bg-merino rounded-xl sm:w-80 md:w-2/5 p-2 justify-center items-center mx-auto my-4 md:m-4 animate-slide-left"
              style={{
                animationDelay: `${1 + animationDelay}s`,
                animationDuration: `${animationDuration}s`,
                opacity: `${isLoaded ? '100' : '0'}`,
              }}
              onLoad={handleLoaded}
            >
              <img class="h-auto w-4/5 rounded-full" src={aboutLuc} alt='Luc Debaupte img' />
              <div class="sm:text-3xl text-xl">Luc Debaupte</div>
              <div class="flex flex-row w-full justify-center items-center">
                <div class="sm:text-xl mr-2">Full-stack Developer</div>
                <a class="p-1" href="https://github.com/luc779"><img class="sm:w-10 w-5 sm:h-10 h-5 rounded-xl hover:bg-slate-300" src={githubIcon} alt='Luc Debaupte Github'/></a>
                <a class="p-1" href="https://www.linkedin.com/in/luc-debaupte/"><img class="sm:w-10 w-5 sm:h-10 h-5 rounded-xl hover:bg-slate-300" src={linkedInIcon} alt='Luc Debaupte LinkedIn'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full h-4">
        <a class="absolute bottom-0 right-0 text-xs text-sky-700" href="http://www.freepik.com">Background image designed by Nenilkime / Freepik</a>
      </div>
    </div>
  );
}

export default About;