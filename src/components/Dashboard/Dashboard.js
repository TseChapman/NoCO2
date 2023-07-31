import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getEmissionHistory } from '../../api/NoCO2_api';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import LineGraph from './LineGraph';
import EmissionDetailPanel from './EmissionDetailPanel';
import Statistics from './Statistics';

function Dashboard() {
  const [emissionHistory, setEmissionHistory] = useState([]);
  const [goal, setGoal] = useState("60 lb");
  const [curEmission, setCurEmission] = useState("None");

  const navigate = useNavigate(); // add useNavigate hook

  useEffect(() => {
    const auth = getAuth();
    const fetchData = async (uid) => {
      try {
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

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, fetch the user's emission history
        fetchData(user.uid);
      } else {
        // User is signed out, handle accordingly
        navigate("/NoCO2/");
      }
    });

    // Clean up the event listener when the component is unmounted
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <div className="text-7xl text-black/0 mb-3">
        empty
      </div>
      <div>
        <LineGraph emissionHistory={emissionHistory} />
        <EmissionDetailPanel goal={goal} curEmission={curEmission} />
        <Statistics />
      </div>
    </div>
  );
}

export default Dashboard;
