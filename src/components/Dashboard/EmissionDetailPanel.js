function EmissionDetailPanel() {
  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-limeGreen w-full p-3.5 rounded-2xl flex flex-row">
        <div class="bg-white w-2/6 h-20 rounded-2xl p-2 shadow-inner shadow-limeGreen flex flex-row justify-between items-center text-3xl mr-8">
          <div>Goal Emission:</div><div>XXX lb</div>
        </div>
        <div class="bg-white w-3/6 h-20 rounded-2xl p-2 shadow-inner shadow-limeGreen flex flex-row justify-between items-center text-3xl mr-4">
          <div>Current Emission:</div><div>XXX lb</div>
        </div>
        <button class="bg-cloudy w-1/6 h-20 rounded-2xl p-2 shadow-lg text-4xl font-bold text-merino">Edit</button>
      </div>
    </div>
  );
}

export default EmissionDetailPanel;