import { useState } from "react";

function AddForm({uid}) {
  const [formInputs, setFormInputs] = useState({
    "transport_method": "Truck",
    "transport_mpg": "0",
    "transport_count": "0",
    "transport_unit": "m",
    "food_type": "Beef",
    "food_count": "0",
    "food_unit": "g",
    "laundry_method": "WashingMachineCycle",
    "laundry_count":"0",
    "laundry_unit": "",
  });

  const handleChange = e => {
    const nextFormState = {
      ...formInputs,
      [e.target.name]: e.target.value,
    };
    console.log(e.target)
    setFormInputs(nextFormState);
  }

  return (
    <div>
      <form class="w-full px-4">
        <div class="w-full px-2 border border-black rounded-xl">
            <label class="flex flex-row text-xl mt-4">
              <div class="mr-3">Transport:</div>
              <select class="border border-black rounded-xl text-left" name="transport_method" value={formInputs.transport_method} onChange={handleChange}>
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
              <div class="ml-3"> with </div>
              <div class="ml-3">
                <input
                  class="border border-black rounded-xl text-left"
                  name="transport_mpg"
                  type='text'
                  value={formInputs.transport_mpg}
                  onChange={handleChange}
                />
              </div>
              <div class="ml-3"> mpg on</div>
              <div class="ml-3">
                <input
                  class="border border-black rounded-xl text-left"
                  name="transport_count"
                  type='text'
                  value={formInputs.transport_count}
                  onChange={handleChange}
                />
              </div>
              <select class="border border-black rounded-xl text-left ml-3" name="transport_unit" value={formInputs.transport_unit} onChange={handleChange}>
                <option value="m">m</option>
                <option value="km">km</option>
                <option value="miles">miles</option>
              </select>
            </label>

            <label class="flex flex-row text-xl mt-4">
              <div class="mr-3">Food:</div>
              <select class="border border-black rounded-xl text-left ml-3" name="food_type" value={formInputs.food_type} onChange={handleChange}>
                <option value="Beef">Beef</option>
                <option value="Lamb">Lamb</option>
                <option value="Prawns">Prawns</option>
                <option value="Cheese">Cheese</option>
                <option value="Pork">Pork</option>
                <option value="Chicken">Chicken</option>
                <option value="Fish">Fish</option>
                <option value="Dark_Chocolate">Dark Chocolate</option>
                <option value="Eggs">Eggs</option>
                <option value="Berries">Berries</option>
                <option value="Rice">Rice</option>
                <option value="Tofu">Tofu</option>
                <option value="Apple">Apple</option>
                <option value="Brassica">Brassica</option>
                <option value="Nuts">Nuts</option>
                <option value="Potatoes">Potatoes</option>
                <option value="Orange">Orange</option>
                <option value="Root_Vegetables">Root_Vegetables</option>
                <option value="Milk">Milk</option>
                <option value="Soy_Milk">Soy Milk</option>
                <option value="Almond_Milk">Almond Milk</option>
              </select>
              <div class="ml-3"> with</div>
              <div class="ml-3">
                <input
                  class="border border-black rounded-xl text-left"
                  name="food_count"
                  type='text'
                  value={formInputs.food_count}
                  onChange={handleChange}
                />
              </div>
              <select class="border border-black rounded-xl text-left ml-3" name="food_unit" value={formInputs.food_unit} onChange={handleChange}>
                <option value="g">g</option>
                <option value="lg">pound</option>
                <option value="pound">ml</option>
              </select>
            </label>

            <label class="flex flex-row text-xl mt-4">
              <div class="mr-3">Laundry:</div>
              <select class="border border-black rounded-xl text-left ml-3" name="laundary_method" value={formInputs.laundary_method} onChange={handleChange}>
                <option value="WashingMachineCycle">Washing Machine Cycle</option>
                <option value="DryingMachineCycle">Drying Machine Cycle</option>
              </select>
              <div class="ml-3">
                <input
                  class="border border-black rounded-xl text-left ml-3"
                  name="laundry_count"
                  type='text'
                  value={formInputs.laundry_count}
                  onChange={handleChange}
                />
              </div>
              <div class="ml-3">Cycle</div>
            </label>
            <button
              class="mt-4 mb-4 h-20 w-full rounded-2xl bg-matrix text-merino text-3xl font-bold"
              type="submit"
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;