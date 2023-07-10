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
    label: "6 Months",
  },
  {
    label: "Year",
  },
];

function LineGraph({emissionHistory}) {
  const [data, setData] = useState();

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabLeft(currentTab?.offsetLeft ?? 0);
      setTabWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    async function filterEmissionHistByTab() {
      const selectedTab = tabsData[activeTabIndex].label;
      let filteredHistory = [];

      if (emissionHistory.length > 0) {
        filteredHistory = emissionHistory;
        if (selectedTab === "Week") {
          filteredHistory = emissionHistory.slice(-7);
        } else if (selectedTab === "Month") {
          filteredHistory = emissionHistory.slice(-30);
        } else if (selectedTab === "6 Months") {
          filteredHistory = emissionHistory.slice(-180);
        }

        setData(filteredHistory);
      }
    }

    filterEmissionHistByTab();
  }, [activeTabIndex, emissionHistory]);

  return (
    <div>
      <div class="flex md:flex-row md:justify-between flex-col justify-start px-4 mb-4">
        <div class="lg:text-5xl md:text-4xl text-3xl font-bold">Emission Line Chart</div>
        <div class="relative bg-cloudy rounded-xl w-2/5 slide-down-animation">
          <div class="flex h-full">
            {tabsData.map((tab, idx) => {
              const isLastButton = idx === tabsData.length - 1;
              const buttonClasses = `z-10 px-2 flex items-center hover:underline hover:underline-offset-2 lg:text-xl md:text-lg text-md text-merino justify-center${isLastButton ? '' : ' relative'}`;

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
            <Line type="monotone" dataKey="Total" stroke="#8884d8" />
            <Line type="monotone" dataKey="Goal" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="DateTime">
              <Label value="Date of Emission (UTC)" offset={-5} position="insideBottom" />
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