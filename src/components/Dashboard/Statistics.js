import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import StatisticsCard from "./StatisticsCard";
import { getEmissionStatistics } from "../../api/NoCO2_api";

function Statistics() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth();
        const uid = auth.currentUser ? auth.currentUser.uid : null;
        const emissionStatistics = await getEmissionStatistics(uid);
        setStatistics(emissionStatistics);
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-matrix w-full p-3.5 rounded-2xl flex flex-col md:flex-row justify-between md:flex-wrap lg:overflow-hidden animate-slide-up-delay-2">
        {statistics?.length > 0 &&
          statistics.map((card, idx) => {
            return (
            <StatisticsCard
              idx={idx}
              card={card}
            />);
          }
        )}
      </div>
    </div>
  );
}

export default Statistics;