import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getUserActivities, submitUserActivities } from "../../api/NoCO2_api";
import { Oval } from 'react-loader-spinner';
import TransportFormPanel from "./TransportFormPanel";
import FoodFormPanel from "./FoodFormPanel";
import UtilityFormPanel from "./UtilityFormPanel";

function ActivityInputFormPanel() {
  const [activities, setActivities] = useState({
    Transports:[],
    Foods:[],
    Utilities:[]
  })

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const auth = getAuth();
        const uid = auth.currentUser ? auth.currentUser.uid : null;
        const userActivities = await getUserActivities(uid);
        if (userActivities != null) {
          setActivities(userActivities)
        }
        setIsLoading(false);
      } catch (error) {
        // Handle the error here
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmitActivities = async () => {
    try {
      setIsLoading(true);
      //console.log(activities);
      const auth = getAuth();
      const uid = auth.currentUser ? auth.currentUser.uid : null;
      await submitUserActivities(uid, activities);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div class="px-4">
        <TransportFormPanel activities={activities} setActivities={setActivities}/>
        <FoodFormPanel activities={activities} setActivities={setActivities} />
        <UtilityFormPanel activities={activities} setActivities={setActivities} />
        <div class="w-full h-24 mb-4">
          <button
            class="w-full h-full bg-limeGreen rounded-2xl shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 text-merino md:text-6xl sm:text-5xl text-3xl flex items-center justify-center"
            onClick={handleSubmitActivities}
            disabled={isLoading}
          >
            {isLoading ?
              <Oval
                height={60}
                width={60}
                color='#f5ece5'
                secondaryColor="#b0aca2"
              /> :
              "Submit Activities"
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityInputFormPanel;