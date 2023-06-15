function FoodFormPanel({activities, setActivities}) {
  const handleAddFood = () => {
    const foodTypeInput = document.getElementById('foodType');
    const amountInput = document.getElementById('amount');

    const foodType = foodTypeInput.value;
    const amount = amountInput.value;

    const numericRegex = /^[0-9]+(\.[0-9]+)?$/;

    // Check valid inputs
    if (foodType !== 'Select foood Type' && amount !== '' && numericRegex.test(amount)) {
      const newFood = {
        FoodType: foodType,
        Amount: amount
      }

      // Update Foods list
      setActivities((prevActivities) => ({
        ...prevActivities,
        Foods: [...prevActivities.Foods, newFood]
      }));

      // Reset values
      foodTypeInput.value = 'Select Food Type';
      amountInput.value = '';
    } else {
      console.warn("Invalid food input");
    }

  };

  const handleDeleteFood = (food) => {
    // Delete the food entry
    const updatedFoods = activities.Foods.filter(
      (item) => item !== food
    );

    setActivities((prevActivities) => ({
      ...prevActivities,
      Foods: updatedFoods
    }));
  };

  return (
    <div class="w-full bg-matrix rounded-2xl p-3.5 mb-4">
      <div class="w-full h-full rounded-2xl bg-white p-3.5 overflow-y-auto">
        <div class="lg:text-6xl md:text-5xl text-4xl font-bold mb-3">Food</div>
        <table class="min-w-full divide-y divide-gray-200 mb-3">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="md:px-6 px-2 py-3 text-left lg:text-3xl md:text-2xl text-lg font-medium text-gray-500 uppercase tracking-wider"
              >
                Food Type
              </th>
              <th
                scope="col"
                class="md:px-6 px-2 py-3 text-left lg:text-3xl md:text-2xl text-lg font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount (kg or Serving)
              </th>
              <th scope="col" class="relative md:px-6 px-2 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {activities.Foods.map((food, idx) => (
              <tr key={idx}>
                <td class="md:px-6 px-2 py-2 whitespace-nowrap w-2/5 lg:text-3xl md:text-2xl text-xl">
                  {food.FoodType}
                </td>
                <td class="md:px-6 px-2 py-2 whitespace-nowrap w-2/5 lg:text-3xl md:text-2xl text-xl">
                  {food.Amount}
                </td>
                <td class="md:px-6 px-2 py-2">
                  <div class="flex items-center">
                    <div class="ml-auto">
                      <button
                        class="md:w-20 md:h-20 w-16 h-16 bg-matrix rounded-2xl relative shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700"
                        onClick={() => handleDeleteFood(food)}
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
              id="foodType"
              class="px-2 border-none outline-none shadow-inner shadow-gray-300 rounded-xl lg:text-3xl md:text-2xl text-xl text-left w-full h-full"
              name="food_method"
              defaultValue="Select Food Type"
            >
              <option value="Select Food Type">Select Food Type</option>
              <option value="Beef">Beef</option>
              <option value="Lamb">Lamb</option>
              <option value="Prawns">Prawns</option>
              <option value="Cheese">Cheese</option>
              <option value="Pork">Pork</option>
              <option value="Chicken">Chicken</option>
              <option value="Fish">Fish</option>
              <option value="Dark Chocolate">Dark Chocolate</option>
              <option value="Eggs">Eggs</option>
              <option value="Berries">Berries</option>
              <option value="Rice">Rice</option>
              <option value="Tofu">Tofu</option>
              <option value="Apple">Apple</option>
              <option value="Brassica">Brassica</option>
              <option value="Nuts">Nuts</option>
              <option value="Potatoes">Potatoes</option>
              <option value="Orange">Orange</option>
              <option value="Root Vegetables">Root_Vegetables</option>
              <option value="Milk">Milk</option>
              <option value="Soy Milk">Soy Milk</option>
              <option value="Almond Milk">Almond Milk</option>
            </select>
          </div>
          <div class="md:w-2/5 w-full h-20 py-3 px-2">
            <input
              id="amount"
              class="px-3 border-none outline-none shadow-inner shadow-gray-300 rounded-xl lg:text-3xl md:text-2xl text-xl text-left w-full h-full"
              name="food_kg"
              placeholder="Kg or Serving..."
              type='text'
            />
          </div>
          <div class="md:w-1/5 w-full h-20 py-3 pr-3 pl-2">
            <button
              class="bg-limeGreen shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 rounded-2xl w-full h-full lg:text-xl md:text-base text-2xl text-merino font-bold px-2"
              onClick={handleAddFood}
            >
              Add Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodFormPanel;