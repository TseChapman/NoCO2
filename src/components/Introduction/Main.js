import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/BackgroundImage.jpg';
import logo from '../../assets/Logo2.png';
import '../../index.css';

export class Main extends Component {
  state = {
    logoLoaded: false,
  };

  handleLogoLoad = () => {
    this.setState({ logoLoaded: true });
  };

  render() {
    return (
      <div class="min-h-max">
        <img class="z-0 h-screen w-screen object-cover object-center absolute" src={backgroundImage} alt='Background'/>
        <div class="flex flex-col justify-center items-center h-screen w-full overflow-y-auto">
          <img
            class="z-10 mt-24 sm:mt-16 sm:w-2/4 sm:h-2/6 object-contain animate-slide-up-delay-1"
            src={logo}
            alt='Logo'
            style={{opacity: `${this.state.logoLoaded ? '100' : '0'}`}}
            onLoad={this.state.handleLogoLoad}
          />
          <div
            class="z-10 mt-4 w-4/5 lg:text-7xl md:text-6xl sm:text-5xl text-3xl text-center text-cabbagePoint animate-slide-up-delay-2"
            style={{opacity: `${this.state.logoLoaded ? '100' : '0'}`}}
          >
            Shape the Future!
          </div>
          <div
            class="z-10 w-4/5 lg:text-7xl md:text-6xl sm:text-5xl text-3xl text-center text-cabbagePoint animate-slide-up-delay-3"
            style={{opacity: `${this.state.logoLoaded ? '100' : '0'}`}}
          >
            Lets hit net zero CO2 in 2050
          </div>
          <div class="w-full">
            <Link to="/NoCO2/signup" class="z-10 flex flex-col justify-center items-center">
              <button
                class="z-10 sm:w-5/12 w-5/6 mt-12 bg-limeGreen hover:bg-merino rounded-2xl text-merino hover:text-limeGreen h-20 lg:text-5xl md:text-4xl text-3xl animate-slide-up-delay-4"
                style={{opacity: `${this.state.logoLoaded ? '100' : '0'}`}}
              >
                Lets Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}