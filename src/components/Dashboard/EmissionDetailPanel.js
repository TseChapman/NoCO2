import { Link } from "react-router-dom";

function EmissionDetailPanel({goal, curEmission}) {
  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-limeGreen w-full p-3.5 rounded-2xl flex lg:flex-row flex-col animate-slide-up-delay-1">
        <div class="font-heebo bg-white lg:w-2/6 w-full sm:h-20 rounded-2xl p-2 shadow-inner lg:mb-0 mb-3 shadow-limeGreen flex flex-row justify-between items-center lg:text-3xl md:text-2xl text-xl mr-8">
          <div>Goal:</div><div>{goal}</div>
        </div>
        <div class="lg:w-4/6 w-full flex flex-row">
          <div class="font-heebo bg-white w-4/6 sm:h-20 rounded-2xl p-2 shadow-inner shadow-limeGreen flex flex-row justify-between items-center lg:text-3xl md:text-2xl text-xl mr-4">
            <div>Current:</div><div>{curEmission}</div>
          </div>
          <Link to="/NoCO2/dashboard/activities" class="w-2/6 sm:h-20">
            <button class="font-heebo bg-cloudy w-full h-full rounded-2xl p-2 shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 lg:text-4xl md:text-3xl text-2xl font-bold text-merino">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmissionDetailPanel;