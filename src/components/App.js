import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import Class from './Configuration/Class';
import System from './Configuration/System';
import School from './Configuration/School';
import Branch from './Configuration/Branch';
import Subject from './Configuration/Subject';
import Position from './Configuration/Position';
import Prefects from './Configuration/Prefects';
import Department from './Configuration/Department';
import AcademicYear from './Configuration/AcademicYear';
import LessonPlan from './Configuration/Curriculum/LessonPlan';
import SchoolCalendar from './Configuration/Event/SchoolCalendar';
import SchemeOfWork from './Configuration/Curriculum/SchemeOfWork';
import ExamTimetable from './Configuration/Timetable/ExamTimetable';
import ClassTimetable from './Configuration/Timetable/ClassTimetable';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/class' element={<Class />} />
      <Route path='/configuration/system' element={<System />} />
      <Route path='/configuration/school' element={<School />} />
      <Route path='/configuration/branch' element={<Branch />} />
      <Route path='/configuration/subject' element={<Subject />} />
      <Route path='/configuration/position' element={<Position />} />
      <Route path='/configuration/prefects' element={<Prefects />} />
      <Route path='/configuration/department' element={<Department />} />
      <Route path='/configuration/academic_year' element={<AcademicYear />} />
      <Route path='/configuration/event/school' element={<SchoolCalendar />} />
      <Route path='/configuration/timetable/exam' element={<ExamTimetable />} />
      <Route path='/configuration/timetable/class' element={<ClassTimetable />} />
      <Route path='/configuration/curriculum/lesson_plan' element={<LessonPlan />} />
      <Route path='/configuration/curriculum/scheme_of_work' element={<SchemeOfWork />} />
    </Routes>
  );
}

export default App;
