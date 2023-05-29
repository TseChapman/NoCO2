import { useState } from "react";
import TransportFormPanel from "./TransportFormPanel";

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
      </div>
    </div>
  );
}

export default ActivityInputFormPanel;