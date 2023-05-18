function EmissionDetailPanel() {
  return (
    <div class="flex justify-center align-middle px-4 mb-4">
      <div class="bg-limeGreen w-full p-3.5 rounded-2xl flex lg:flex-row flex-col">
        <div class="bg-white lg:w-2/6 w-full h-20 rounded-2xl p-2 shadow-inner lg:mb-0 mb-3 shadow-limeGreen flex flex-row justify-between items-center lg:text-3xl md:text-2xl text-xl mr-8">
          <div>Goal Emission:</div><div>XXX lb</div>
        </div>
        <div class="lg:w-4/6 w-full flex flex-row">
          <div class="bg-white w-4/6 h-20 rounded-2xl p-2 shadow-inner shadow-limeGreen flex flex-row justify-between items-center lg:text-3xl md:text-2xl text-xl mr-4">
            <div>Current Emission:</div><div>XXX lb</div>
          </div>
          <button class="bg-cloudy w-2/6 h-20 rounded-2xl p-2 shadow-lg lg:text-4xl md:text-3xl text-2xl font-bold text-merino">Edit</button>
        </div>

      </div>
    </div>
  );
}

export default EmissionDetailPanel;