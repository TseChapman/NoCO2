function Statistics() {
  const statistic = [
    {statistic: "Highest Emission Activity", topic: "Transport", stat: "XX%"},
    {statistic: "Average Emission", topic: "XXX days", stat: "XXX lb"},
    {statistic: "Emission Difference", topic: "Previous day", stat: "- XXX lb"}
  ]

  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-matrix w-full p-3.5 rounded-2xl flex flex-row justify-between space-x-4">
        {statistic.map((card, idx) => {
          return (
            <div class="h-56 bg-white rounded-2xl w-1/3">
              <div>{card.statistic}</div>
              <div>{card.topic}</div>
              <div>{card.stat}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Statistics;