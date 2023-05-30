function TransportFormPanel({activities, setActivities}) {
  const handleAddTransport = () => {
    const transportTypeInput = document.getElementById('transportType');
    const milesInput = document.getElementById('miles');

    const transportType = transportTypeInput.value;
    const miles = milesInput.value;

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;

    // Check valid inputs
    if (transportType !== 'Select Transport Type' && miles !== '' && numericRegex.test(miles)) {
      const newTransport = {
        TransportType: transportType,
        Miles: miles
      }

      // Update Transports list
      setActivities((prevActivities) => ({
        ...prevActivities,
        Transports: [...prevActivities.Transports, newTransport]
      }));

      // Reset values
      transportTypeInput.value = 'Select Transport Type';
      milesInput.value = '';
    } else {
      console.warn("Invalid transport input");
    }

  };

  const handleDeleteTransport = (transport) => {
    // Delete the transport entry
    const updatedTransports = activities.Transports.filter(
      (item) => item !== transport
    );

    setActivities((prevActivities) => ({
      ...prevActivities,
      Transports: updatedTransports
    }));
  };

  return (
    <div class="w-full bg-matrix rounded-2xl p-3.5 mb-4">
      <div class="w-full h-full rounded-2xl bg-white p-3.5 overflow-y-auto">
        <div class="lg:text-6xl md:text-5xl text-4xl font-bold mb-3">Transport</div>
        <table class="min-w-full divide-y divide-gray-200 mb-3">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="md:px-6 px-2 py-3 text-left lg:text-3xl md:text-2xl text-lg font-medium text-gray-500 uppercase tracking-wider"
              >
                Transport Type
              </th>
              <th
                scope="col"
                class="md:px-6 px-2 py-3 text-left lg:text-3xl md:text-2xl text-lg font-medium text-gray-500 uppercase tracking-wider"
              >
                Distance (miles)
              </th>
              <th scope="col" class="relative md:px-6 px-2 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {activities.Transports.map((transport, idx) => (
              <tr key={idx}>
                <td class="md:px-6 px-2 py-2 whitespace-nowrap w-2/5 lg:text-3xl md:text-2xl text-xl">
                  {transport.TransportType}
                </td>
                <td class="md:px-6 px-2 py-2 whitespace-nowrap w-2/5 lg:text-3xl md:text-2xl text-xl">
                  {transport.Miles}
                </td>
                <td class="md:px-6 px-2 py-2">
                  <div class="flex items-center">
                    <div class="ml-auto">
                      <button
                        class="md:w-20 md:h-20 w-16 h-16 bg-matrix rounded-2xl relative shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700"
                        onClick={() => handleDeleteTransport(transport)}
                      >
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div class="md:w-20 md:h-6 w-16 h-4 bg-slate-200 rounded-full rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten shadow-inner shadow-gray-500"></div>
                          <div class="md:w-20 md:h-6 w-16 h-4 bg-slate-200 rounded-full -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten shadow-inner shadow-gray-500"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        <div class="w-full flex md:flex-row flex-col bg-cloudy rounded-2xl">
          <div class="md:w-2/5 w-full h-20 py-3 pl-3 pr-2">
            <select
              id="transportType"
              class="px-2 border-none outline-none shadow-inner shadow-gray-300 rounded-xl lg:text-3xl md:text-2xl text-xl text-left w-full h-full"
              name="transport_method"
              defaultValue="Select Transport Type"
            >
              <option value="Select Transport Type">Select Transport Type</option>
              <option value="Truck">Truck</option>
              <option value="4 Door Petrol_Car">4 Door Petrol Car</option>
              <option value="Medium Diesel-Powered Car">Medium Diesel-Powered Car</option>
              <option value="Plane">Plane Travel</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bus">Bus</option>
              <option value="Electric Vehicle">Electric Vehicle</option>
              <option value="Train">Train Travel</option>
              <option value="Ferry">Ferry</option>
            </select>
          </div>
          <div class="md:w-2/5 w-full h-20 py-3 px-2">
            <input
              id="miles"
              class="px-3 border-none outline-none shadow-inner shadow-gray-300 rounded-xl lg:text-3xl md:text-2xl text-xl text-left w-full h-full"
              name="transport_mpg"
              type='text'
            />
          </div>
          <div class="md:w-1/5 w-full h-20 py-3 pr-3 pl-2">
            <button
              class="bg-limeGreen shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 rounded-2xl w-full h-full lg:text-xl md:text-base text-2xl text-merino font-bold px-2"
              onClick={handleAddTransport}
            >
              Add Transport
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportFormPanel;