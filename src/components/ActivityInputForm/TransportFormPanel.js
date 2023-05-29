function TransportFormPanel() {
  return (
    <div class="w-full bg-matrix rounded-2xl p-3.5">
      <div class="w-full h-full rounded-2xl bg-white p-3.5">
        <div class="text-6xl font-bold mb-3">Transport</div>
        <table class="min-w-full divide-y divide-gray-200 mb-3">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-3xl font-medium text-gray-500 uppercase tracking-wider"
              >
                Transport Type
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-3xl font-medium text-gray-500 uppercase tracking-wider"
              >
                Distance (miles)
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-2 whitespace-nowrap w-2/5 text-3xl">
                Type 1
              </td>
              <td class="px-6 py-2 whitespace-nowrap w-2/5 text-3xl">
                XXX miles
              </td>
              <td class="px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-auto">
                    <button class="w-20 h-20 bg-matrix rounded-2xl relative shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="w-20 h-6 bg-slate-200 rounded-full rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten shadow-inner shadow-gray-500"></div>
                        <div class="w-20 h-6 bg-slate-200 rounded-full -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten shadow-inner shadow-gray-500"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="w-full flex flex-row">
          <div class="w-2/5 h-20 p-3">
            <select class="px-2 border border-black rounded-xl text-3xl text-left w-full h-full" name="transport_method">
              <option value="Truck">Truck</option>
              <option value="4_Door_Petrol_Car">4 Door Petrol Car</option>
              <option value="Medium_Diesel_Powered_Car">Medium Diesel-Powered Car</option>
              <option value="Plane">Plane Travel</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bus">Bus</option>
              <option value="Electric_Vehicle">Electric Vehicle</option>
              <option value="Train">Train Travel</option>
              <option value="Ferry">Ferry</option>
            </select>
          </div>
          <div class="w-2/5 h-20 p-3">
            <input
              class="px-3 border border-black rounded-xl text-3xl text-left w-full h-full"
              name="transport_mpg"
              type='text'
            />
          </div>
          <div class="w-1/5 h-20 p-3">
            <button class="bg-limeGreen rounded-2xl w-full h-full text-2xl text-merino font-bold">Add Transport</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportFormPanel;