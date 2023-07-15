import backgroundImage from '../../assets/BackgroundImage.jpg';

function About() {

  const icon = require('../../assets/noco2-logo.png');
  return (
    <div className="w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div class="text-7xl text-black/0 mb-3">
        empty
      </div>
      <div class="px-4">
        <div className="w-full h-48 flex flex-row rounded-xl overflow-hidden">
          <div className="w-2/5 relative bg-white">
            <div className="absolute inset-0 shadow-inner shadow-gray-300 p-2">
              <img className="w-full h-full object-contain" src={icon} alt="Icon" />
            </div>
          </div>
          <div className="w-3/5 p-2 bg-cloudy">
            <span className="text-white text-2xl">
              NoCO2 is a React app that allow user to monitor their CO2 emission.
              The goal of this project is to help user keep an eye out on their daily CO2 emission to help the United States reach net-zero CO2 emission in 2050.
            </span>
          </div>
        </div>
        <div>
          <div>
            <div>ctse image</div>
            <div>ctse about</div>
          </div>
          <div>
            <div>luc image</div>
            <div>luc about</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;