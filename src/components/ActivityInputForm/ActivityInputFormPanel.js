import { useState } from "react";
import TransportFormPanel from "./TransportFormPanel";
import FoodFormPanel from "./FoodFormPanel";
import UtilityFormPanel from "./UtilityFormPanel";

function ActivityInputFormPanel() {
  const [activities, setActivities] = useState({
    Transports:[],
    Foods:[],
    Utilities:[]
  })

  const handleSubmitActivities = () => {

  };

  return (
    <div>
      <div class="px-4">
        <TransportFormPanel activities={activities} setActivities={setActivities}/>
        <FoodFormPanel activities={activities} setActivities={setActivities} />
        <UtilityFormPanel activities={activities} setActivities={setActivities} />
        <div class="w-full h-24 mb-4">
          <button
            class="w-full h-full bg-limeGreen rounded-2xl shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 text-merino md:text-6xl text-5xl"
          >
            Submit Activities
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityInputFormPanel;