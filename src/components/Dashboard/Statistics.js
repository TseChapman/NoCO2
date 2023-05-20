function Statistics() {
  const statistic = [
    {statistic: "Highest Emission Activity", topic: "Transport", stat: "XX%"},
    {statistic: "Average Emission", topic: "XXX days", stat: "XXX lb"},
    {statistic: "Emission Difference", topic: "Previous day", stat: "- XXX lb"}
  ]

  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-matrix w-full p-3.5 rounded-2xl flex flex-col md:flex-row justify-between md:flex-wrap lg:overflow-hidden">
        {statistic.map((card, idx) => {
          return (
            <div class="h-72 w-full md:w-1/2 lg:w-1/3 p-2">
              <div class="w-full h-full bg-black rounded-2xl p-3.5 shadow-2xl flex flex-col justify-between">
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