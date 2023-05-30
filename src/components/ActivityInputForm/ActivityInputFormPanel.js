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

  return (
    <div>
      <div class="px-4">
        <TransportFormPanel activities={activities} setActivities={setActivities}/>
        <FoodFormPanel activities={activities} setActivities={setActivities} />
        <UtilityFormPanel activities={activities} setActivities={setActivities} />
        <div>
          <button>Submit Activities</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityInputFormPanel;