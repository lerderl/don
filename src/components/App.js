import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import System from './Configuration/System';
import School from './Configuration/School';
import Branch from './Configuration/Branch';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/system' element={<System />} />
      <Route path='/configuration/school' element={<School />} />
      <Route path='/configuration/branch' element={<Branch />} />
    </Routes>
  );
}

export default App;
