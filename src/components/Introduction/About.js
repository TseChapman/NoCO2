import backgroundImage from '../../assets/AboutBg.jpg'

function About() {

  const icon = require('../../assets/noco2-logo.png');
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
        <div class="bg-matrix rounded-xl p-2">
          <div className="w-full h-2/4 md:h-52 flex flex-col md:flex-row rounded-xl overflow-hidden">
            <div className="w-full md:w-2/5 relative bg-white">
              <div className="md:absolute inset-0 shadow-inner shadow-gray-300 p-2 flex items-center justify-center">
                <img className="w-4/5 md:w-full h-4/5 md:h-full object-contain" src={icon} alt="Icon" />
              </div>
            </div>
            <div className="w-full md:w-3/5 p-2 bg-cloudy">
              <span className="text-white text-2xl">
                NoCO2 is a React app that allows users to monitor their CO2 emissions.
                The goal of this project is to help users keep an eye on their daily CO2 emissions and contribute to achieving the United States' net-zero CO2 emissions target by 2050.
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
    </div>
  );
}

export default About;