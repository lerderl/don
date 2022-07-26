import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import Class from './Configuration/Class';
import System from './Configuration/System';
import School from './Configuration/School';
import Branch from './Configuration/Branch';
import Position from './Configuration/Position';
import Prefects from './Configuration/Prefects';
import Department from './Configuration/Department';
import AcademicYear from './Configuration/AcademicYear';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/class' element={<Class />} />
      <Route path='/configuration/system' element={<System />} />
      <Route path='/configuration/school' element={<School />} />
      <Route path='/configuration/branch' element={<Branch />} />
      <Route path='/configuration/position' element={<Position />} />
      <Route path='/configuration/prefects' element={<Prefects />} />
      <Route path='/configuration/department' element={<Department />} />
      <Route path='/configuration/academic_year' element={<AcademicYear />} />
    </Routes>
  );
}

export default App;
