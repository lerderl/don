import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import System from './Configuration/System';
import School from './Configuration/School';
import Branch from './Configuration/Branch';
import Position from './Configuration/Position';
import Prefects from './Configuration/Prefects';
import Department from './Configuration/Department';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/system' element={<System />} />
      <Route path='/configuration/school' element={<School />} />
      <Route path='/configuration/branch' element={<Branch />} />
      <Route path='/configuration/position' element={<Position />} />
      <Route path='/configuration/prefects' element={<Prefects />} />
      <Route path='/configuration/department' element={<Department />} />
    </Routes>
  );
}

export default App;
