import StatisticsCard from "./StatisticsCard";

function Statistics() {
  const statistic = [
    {statistic: "Highest Emission Activity", topic: "Transport", stat: "XX%"},
    {statistic: "Average Emission", topic: "XXX days", stat: "XXX lb"},
    {statistic: "Emission Difference", topic: "Previous day", stat: "- XXX lb"}
  ]

  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-matrix w-full p-3.5 rounded-2xl flex flex-col md:flex-row justify-between md:flex-wrap lg:overflow-hidden animate-slide-up-delay-2">
        {statistic.map((card, idx) => {
          return (
          <StatisticsCard
            idx={idx}
            card={card}
          />);
        })}
      </div>
    </div>
  );
}

export default Statistics;