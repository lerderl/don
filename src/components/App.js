import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import System from './Configuration/System';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/system' element={<System />} />
    </Routes>
  );
}

export default App;
