import { useState } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

import './index.css';

function App() {
  const [user, setUser] = useState();
  return (
    <div>
      <Navbar/>
      <AppRoutes />
    </div>
  );
};

export default App;