import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import System from './Configuration/System';
import School from './Configuration/School';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/system' element={<System />} />
      <Route path='/configuration/school' element={<School />} />
    </Routes>
  );
}

export default App;
