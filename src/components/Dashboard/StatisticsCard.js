import { useState } from "react";
import StatisticsCardBg from '../../assets/StatisticsCardBg.jpg';

function StatisticsCard({idx, card}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleLoaded() {
    setIsLoaded(true);
  }

  const animationDelay = 0.2;
  const animationDuration = 1;
  const zoomDuration = 2;

  const backgroundImageStyle = {
    backgroundPosition: "center",
    backgroundSize: isHovered ? "120%" : "100%",
    backgroundImage: `url(${StatisticsCardBg})`,
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: `transform ${zoomDuration}s, background-size ${zoomDuration}s`,
  };

  return(
    <div class="h-72 w-full md:w-1/2 lg:w-1/3 p-2">
      <div
        class="w-full h-full bg-cover bg-center rounded-2xl p-3.5 shadow-md shadow-gray-700 hover:shadow-lg hover:shadow-gray-700 flex flex-col justify-between animate-slide-left"
        style={{
          animationDelay: `${1 + animationDelay * idx}s`,
          animationDuration: `${animationDuration}s`,
          opacity: `${isLoaded ? '100' : '0'}`,
          backgroundImage: `url(${StatisticsCardBg})`,
          ...backgroundImageStyle,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onLoad={handleLoaded}
      >
        <div>
          <div class="font-heebo text-merino text-2xl">{card.Statistic}</div>
          <div class="font-heebo text-merino font-bold sm:text-5xl text-3xl">{card.Topic}</div>
        </div>
        <div class="font-heebo text-merino font-bold sm:text-5xl text-3xl self-end">{card.Stat}</div>
      </div>
    </div>
  );

}

export default StatisticsCard;