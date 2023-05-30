import { useState } from "react";
import TransportFormPanel from "./TransportFormPanel";
import FoodFormPanel from "./FoodFormPanel";

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
      </div>
    </div>
  );
}

export default ActivityInputFormPanel;