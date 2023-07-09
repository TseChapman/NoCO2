import '../../index.css';
import LineGraph from './LineGraph';
import EmissionDetailPanel from './EmissionDetailPanel';
import Statistics from './Statistics';

function Dashboard() {
  return (
    <div>
      <div class="text-7xl text-black/0 mb-3">
        empty
      </div>
      <div>
        <LineGraph />
        <EmissionDetailPanel />
        <Statistics />
      </div>
    </div>
  );
}

export default Dashboard;