import { Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './Home';

// Configuration imports
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
import Fellowship from './configuration/extra/Fellowship';
import LessonPlan from './configuration/curriculum/LessonPlan';
import SchoolCalendar from './configuration/event/SchoolCalendar';
import SchemeOfWork from './configuration/curriculum/SchemeOfWork';
import ExamTimetable from './configuration/timetable/ExamTimetable';
import ClassTimetable from './configuration/timetable/ClassTimetable';
import SchoolNotification from './configuration/event/SchoolNotification';

// Student imports
import Hostel from './student/task/Hostel';
import Remark from './student/files/Remark';
import Result from './student/files/Result';
import Travel from './student/files/Travel';
import Medical from './student/files/Medical';
import Booklist from './student/setup/Booklist';
import Document from './student/files/Document';
import FeeGroup from './student/setup/FeeGroup';
import FeeSetup from './student/setup/FeeSetup';
import Vocation from './student/files/Vocation';
import Promotion from './student/task/Promotion';
import Behaviour from './student/files/Behaviour';
import Attendance from './student/files/Attendance';
import Discipline from './student/files/Discipline';
import Payments from './student/task/fees/Payments';
import ClubMembers from './student/task/ClubMembers';
import ClassFees from './student/task/fees/ClassFees';
import HostelSetup from './student/setup/HostelSetup';
import SportMembers from './student/task/SportMembers';
import AddStudent from './student/admission/AddStudent';
import NewStudent from './student/admission/NewStudent';
import StudentChange from './student/task/StudentChange';
import StudentFees from './student/task/fees/StudentFees';
import Transaction from './student/task/fees/Transaction';
import StudentLibrary from './student/files/StudentLibrary';
import ActiveStudent from './student/admission/ActiveStudent';
import InactiveStudent from './student/admission/InactiveStudent';
import StudentRemark from './student/task/fileUpload/StudentRemark';
import StudentResult from './student/task/fileUpload/StudentResult';
import StudentBehaviour from './student/task/fileUpload/StudentBehaviour';
import StudentAttendance from './student/task/fileUpload/StudentAttendance';

// Parent imports
import Add from './parent/Add';
import Change from './parent/Change';
import Existing from './parent/Existing';

// Employee imports
import AddEmployee from './employee/employment/AddEmployee';
import NewEmployees from './employee/employment/NewEmployees';
import ActiveEmployees from './employee/employment/ActiveEmployees';
import InactiveEmployees from './employee/employment/InactiveEmployees';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />

      {/* Configuration routes */}
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
      <Route path='/configuration/extra/fellowship' element={<Fellowship />} />
      <Route path='/configuration/timetable/exam' element={<ExamTimetable />} />
      <Route path='/configuration/timetable/class' element={<ClassTimetable />} />
      <Route path='/configuration/curriculum/lesson_plan' element={<LessonPlan />} />
      <Route path='/configuration/event/school_calendar' element={<SchoolCalendar />} />
      <Route path='/configuration/curriculum/scheme_of_work' element={<SchemeOfWork />} />
      <Route path='/configuration/event/school_notification' element={<SchoolNotification />} />

      {/* Student routes */}
      <Route path='/student/task/hostel' element={<Hostel />} />
      <Route path='/student/files/remark' element={<Remark />} />
      <Route path='/student/files/result' element={<Result />} />
      <Route path='/student/files/travel' element={<Travel />} />
      <Route path='/student/files/medical' element={<Medical />} />
      <Route path='/student/setup/booklist' element={<Booklist />} />
      <Route path='/student/files/document' element={<Document />} />
      <Route path='/student/files/vocation' element={<Vocation />} />
      <Route path='/student/setup/fee_group' element={<FeeGroup />} />
      <Route path='/student/setup/fee_setup' element={<FeeSetup />} />
      <Route path='/student/task/promotion' element={<Promotion />} />
      <Route path='/student/files/behaviour' element={<Behaviour />} />
      <Route path='/student/files/attendance' element={<Attendance />} />
      <Route path='/student/files/discipline' element={<Discipline />} />
      <Route path='/student/task/fees/payments' element={<Payments />} />
      <Route path='/student/files/library' element={<StudentLibrary />} />
      <Route path='/student/task/club_members' element={<ClubMembers />} />
      <Route path='/student/task/fees/class_fees' element={<ClassFees />} />
      <Route path='/student/setup/hostel_setup' element={<HostelSetup />} />
      <Route path='/student/task/sport_members' element={<SportMembers />} />
      <Route path='/student/admission/add_student' element={<AddStudent />} />
      <Route path='/student/admission/new_student' element={<NewStudent />} />
      <Route path='/student/task/student_change' element={<StudentChange />} />
      <Route path='/student/task/fees/transaction' element={<Transaction />} />
      <Route path='/student/task/fees/student_fees' element={<StudentFees />} />
      <Route path='/student/task/file_upload/remark' element={<StudentRemark />} />
      <Route path='/student/task/file_upload/result' element={<StudentResult />} />
      <Route path='/student/admission/active_student' element={<ActiveStudent />} />
      <Route path='/student/admission/inactive_student' element={<InactiveStudent />} />
      <Route path='/student/task/file_upload/behaviour' element={<StudentBehaviour />} />
      <Route path='/student/task/file_upload/attendance' element={<StudentAttendance />} />

      {/* Parent routes */}
      <Route path='/student/parent/add' element={<Add />} />
      <Route path='/student/parent/change' element={<Change />} />
      <Route path='/student/parent/existing' element={<Existing />} />

      {/* Employee routes */}
      <Route path='/student/employee/employment/add_employee' element={<AddEmployee />} />
      <Route path='/student/employee/employment/new_employees' element={<NewEmployees />} />
      <Route path='/student/employee/employment/active_employees' element={<ActiveEmployees />} />
      <Route path='/student/employee/employment/inactive_employees' element={<InactiveEmployees />} />
    </Routes>
  );
}

export default App;
