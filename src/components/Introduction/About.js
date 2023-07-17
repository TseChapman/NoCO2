import backgroundImage from '../../assets/AboutBg.jpg';
import aboutCtse from  '../../assets/About/Aboutctse.jpg';
import githubIcon from '../../assets/About/Github_black.png';
import linkedInIcon from '../../assets/About/LinkedIN.png';

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
          <div class="w-full flex flex-col md:flex-row mt-4 justify-around">
            <a class="p-1 rounded-xl bg-white my-2 md:my-0 mx-2 flex flex-row justify-center items-center hover:bg-slate-300 text-2xl" href="https://github.com/TseChapman/NoCO2"><img class="w-10 h-10 rounded-xl mr-2" src={githubIcon} alt='Cheuk Hang Tse Github'/>Front-End Repository</a>
            <a class="p-1 rounded-xl bg-white my-2 md:my-0 mx-2 flex flex-row justify-center items-center hover:bg-slate-300 text-2xl" href="https://github.com/luc779/BackEndFunctions"><img class="w-10 h-10 rounded-xl mr-2" src={githubIcon} alt='Cheuk Hang Tse Github'/>Back-End Repository</a>
          </div>
        </div>
        <div class="bg-matrix rounded-xl p-2 mt-4">
          <div class="w-full text-merino text-6xl flex justify-center">Developers</div>
          <div class="flex flex-col md:flex-row justify-center md:justify-around">
            <div class="flex flex-col bg-slate-100 rounded-xl w-80 md:w-2/5 p-2 justify-center items-center mx-auto my-4 md:m-4">
              <img class="h-auto w-4/5 rounded-full" src={aboutCtse} alt='Cheuk Hang Tse img' />
              <div class="text-3xl">Cheuk Hang Tse</div>
              <div class="flex flex-row w-full justify-center items-center">
                <div class="text-xl mr-2">Full-stack Developer</div>
                <a class="p-1" href="https://github.com/TseChapman"><img class="w-10 h-10 rounded-xl hover:bg-slate-300" src={githubIcon} alt='Cheuk Hang Tse Github'/></a>
                <a class="p-1" href="https://www.linkedin.com/in/cheuk-hang-chapman-tse/"><img class="w-10 h-10 rounded-xl hover:bg-slate-300" src={linkedInIcon} alt='Cheuk Hang Tse LinkedIn'/></a>
              </div>
            </div>
            <div class="flex flex-col bg-slate-100 rounded-xl w-80 md:w-2/5 p-2 justify-center items-center mx-auto my-4 md:m-4">
              <div>luc image</div>
              <div>luc about</div>
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