import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';
import Class from './configuration/Class';
import System from './configuration/System';
import School from './configuration/School';
import Branch from './configuration/Branch';
import Club from './configuration/extra/Club';
import Library from './configuration/Library';
import Subject from './configuration/Subject';
import Position from './configuration/Position';
import Prefects from './configuration/Prefects';
import Sport from './configuration/extra/Sport';
import Department from './configuration/Department';
import AcademicYear from './configuration/AcademicYear';
import LessonPlan from './configuration/curriculum/LessonPlan';
import SchoolCalendar from './configuration/event/SchoolCalendar';
import SchemeOfWork from './configuration/curriculum/SchemeOfWork';
import ExamTimetable from './configuration/timetable/ExamTimetable';
import ClassTimetable from './configuration/timetable/ClassTimetable';
import SchoolNotification from './configuration/event/SchoolNotification';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/configuration/class' element={<Class />} />
      <Route path='/configuration/system' element={<System />} />
      <Route path='/configuration/school' element={<School />} />
      <Route path='/configuration/branch' element={<Branch />} />
      <Route path='/configuration/extra/club' element={<Club />} />
      <Route path='/configuration/library' element={<Library />} />
      <Route path='/configuration/subject' element={<Subject />} />
      <Route path='/configuration/position' element={<Position />} />
      <Route path='/configuration/prefects' element={<Prefects />} />
      <Route path='/configuration/extra/sport' element={<Sport />} />
      <Route path='/configuration/department' element={<Department />} />
      <Route path='/configuration/academic_year' element={<AcademicYear />} />
      <Route path='/configuration/timetable/exam' element={<ExamTimetable />} />
      <Route path='/configuration/timetable/class' element={<ClassTimetable />} />
      <Route path='/configuration/curriculum/lesson_plan' element={<LessonPlan />} />
      <Route path='/configuration/event/school_calendar' element={<SchoolCalendar />} />
      <Route path='/configuration/curriculum/scheme_of_work' element={<SchemeOfWork />} />
      <Route path='/configuration/event/school_notification' element={<SchoolNotification />} />
    </Routes>
  );
}

export default App;
