import { useState } from "react";

function Statistics() {
  const statistic = [
    {statistic: "Highest Emission Activity", topic: "Transport", stat: "XX%"},
    {statistic: "Average Emission", topic: "XXX days", stat: "XXX lb"},
    {statistic: "Emission Difference", topic: "Previous day", stat: "- XXX lb"}
  ]
  const [isLoaded, setIsLoaded] = useState(false);

  function handleLoaded() {
    setIsLoaded(true);
  }

  const animationDelay = 0.2;
  const animationDuration = 1;

  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-matrix w-full p-3.5 rounded-2xl flex flex-col md:flex-row justify-between md:flex-wrap lg:overflow-hidden animate-slide-up-delay-2">
        {statistic.map((card, idx) => {
          return (
            <div class="h-72 w-full md:w-1/2 lg:w-1/3 p-2">
              <div
                class="w-full h-full bg-black rounded-2xl p-3.5 shadow-md shadow-gray-700 hover:shadow-lg hover:shadow-gray-700 flex flex-col justify-between animate-slide-left"
                style={{animationDelay: `${1 + animationDelay * idx}s`, animationDuration: `${animationDuration}s`, opacity: `${isLoaded ? '100' : '0'}`}}
                onLoad={handleLoaded}
              >
                <div>
                  <div class="text-merino text-2xl">{card.statistic}</div>
                  <div class="text-merino font-bold text-5xl">{card.topic}</div>
                </div>
                <div class="text-merino font-bold text-5xl self-end">{card.stat}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Statistics;