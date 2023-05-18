import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';
import '../../index.css';

const tabsData = [
  {
    label: "Week",
  },
  {
    label: "Month",
  },
  {
    label: "Year",
  },
  {
    label: "All",
  },
];

function LineGraph({uid}) {
  const data = [{date: '5/6/2023', total: 2.5, goal: 7.3, amt: 2400}, {date: '5/7/2023', total: 3.5, goal: 7.3, amt: 2400}, {date: '5/8/2023', total: 6.8, goal: 7.3, amt: 2400},  {date: '5/9/2023', total: 9.0, goal: 7.3, amt: 2400}];
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [emissions, setEmission] = useState({});

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  const tabsRef = useRef([]);

  /*
  useEffect(() => {
    // This code will only run once when the component is mounted
    fetch('api/custcreate', {
      method: 'POST',
      body: JSON.stringify({ key: 'some value' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      console.log("useEffect");
    return () => {
      // This code will run when the component is unmounted
      console.log('Component unmounted');
    };
  }, []);
  */

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      //console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabLeft(currentTab?.offsetLeft ?? 0);
      setTabWidth(currentTab?.clientWidth ?? 0);
    }

    console.log(tabsData[activeTabIndex].label);
    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div class="flex flex-row justify-between px-4 mb-4">
        <div class="text-5xl font-bold">Emission Line Chart</div>
        <div class="relative bg-cloudy rounded-xl w-2/5">
          <div class="flex h-full">
            {tabsData.map((tab, idx) => {
              const isLastButton = idx === tabsData.length - 1;
              const buttonClasses = `z-10 px-4 flex items-center text-2xl text-merino justify-center${isLastButton ? '' : ' relative'}`;

              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  class={buttonClasses}
                  style={{ minWidth: "25%" }}
                  onClick={() => setActiveTabIndex(idx)}>
                  {tab.label}
                  {!isLastButton && <span class="absolute inset-y-1/2 right-0 w-px h-3/5 transform -translate-y-1/2 bg-matrix"></span>}
                </button>
              );
            })}
          </div>
          <span
            className="absolute bottom-0 block h-full rounded-xl bg-matrix transition-all duration-300"
            style={{ left: tabLeft, width: tabWidth }}
          />
        </div>
      </div>
      <div style={{ margin: '0 auto' }}>
        <ResponsiveContainer width='98%' aspect={4.0/1.0}>
          <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <Line type="monotone" dataKey="goal" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date">
              <Label value="Date of Emission" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis>
            <Label
              value="CO2 Emission (lb)"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: 'middle' }}
            />
            </YAxis>
            <Tooltip />
            <Legend></Legend>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
 )
}

export default LineGraph;