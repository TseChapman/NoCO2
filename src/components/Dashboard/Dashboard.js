import { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { getEmissionHistory } from '../../api/NoCO2_api';
import '../../index.css';
import LineGraph from './LineGraph';
import EmissionDetailPanel from './EmissionDetailPanel';
import Statistics from './Statistics';

function Dashboard() {
  const [emissionHistory,  setEmissionHistory] = useState([]);
  const [goal, setGoal] = useState("60 lb");
  const [curEmission, setCurEmission] = useState("None");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth();
        const uid = auth.currentUser ? auth.currentUser.uid : null;
        const emissions = await getEmissionHistory(uid);
        if (emissions.length !== 0) {
          const formattedEmissions = emissions.map((item) => ({
            ...item,
            DateTime: new Date(item.DateTime).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
          }));
          setEmissionHistory(formattedEmissions);
          const lastEmission = formattedEmissions[formattedEmissions.length - 1];
          setGoal(lastEmission.Goal + " lb");
          if (lastEmission.Total) {
            setCurEmission(lastEmission.Total.toFixed(2) + " lb");
          }
        }
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div class="text-7xl text-black/0 mb-3">
        empty
      </div>
      <div>
        <LineGraph emissionHistory={emissionHistory}/>
        <EmissionDetailPanel goal={goal} curEmission={curEmission}/>
        <Statistics />
      </div>
    </div>
  );
}

export default Dashboard;