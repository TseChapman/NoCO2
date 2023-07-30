import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import StatisticsCard from "./StatisticsCard";
import { Oval } from 'react-loader-spinner';
import { getEmissionStatistics } from "../../api/NoCO2_api";

function Statistics() {
  const [statistics, setStatistics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const auth = getAuth();
        const uid = auth.currentUser ? auth.currentUser.uid : null;
        const emissionStatistics = await getEmissionStatistics(uid);
        setStatistics(emissionStatistics);
        setIsLoading(false);
      } catch (error) {
        // Handle the error here
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-matrix w-full p-3.5 rounded-2xl flex flex-col md:flex-row justify-between md:flex-wrap lg:overflow-hidden animate-slide-up-delay-2">
      {isLoading && (
          <div className="flex items-center justify-center w-full h-full">
            <Oval
              height={200}
              width={200}
              color="#f5ece5"
              secondaryColor="#b0aca2"
            />
          </div>
        )}

        {!isLoading &&
          statistics?.length > 0 &&
          statistics.map((card, idx) => (
            <StatisticsCard key={idx} idx={idx} card={card} />
          ))}

        {!isLoading &&
          statistics?.length === 0 && (
            <div
              class="w-full text-center text-merino sm:text-4xl text-2xl font-bold"
            >
              Not Enough Data
            </div>
          )}
      </div>
    </div>
  );
}

export default Statistics;