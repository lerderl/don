import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
