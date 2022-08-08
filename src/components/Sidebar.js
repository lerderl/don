import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="page-sidebar-wrapper">
        <div className="page-sidebar navbar-collapse collapse in">
          <ul
            data-slide-speed="200"
            data-auto-scroll="true"
            className="page-sidebar-menu page-sidebar-menu-hover-submenu page-sidebar-menu-compact"
          >
            <li className="open">
              <Link className="ajaxify start" to='/'>
                <i className="icon-home"></i>
                <span className="title">Dashboard</span>
                <span className="selected"></span>
              </Link>
            </li>
            <li className="open">
              <a href="#!">
                <i className="icon-settings"></i>
                <span className="title">Configuration</span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu" style={{ display: "block" }}>
                <li>
                  <Link className="ajaxify" to="/configuration/system">
                    System
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/school">
                    School
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/branch">
                    Branch
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/department">
                    Department
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/position">
                    Position
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/prefects">
                    Prefects
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/academic_year">
                    Academic Year
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/class">
                    Class
                  </Link>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/subject">
                    Subject
                  </Link>
                </li>
                <li>
                  <a href="#!">
                    <span className="title">Curriculum</span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="ajaxify" to="/configuration/curriculum/scheme_of_work">
                        Scheme of Work
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/configuration/curriculum/lesson_plan">
                        Lesson Plan
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Timetable</span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="ajaxify" to="/configuration/timetable/class">
                        Class Timetable
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/configuration/timetable/exam">
                        Exam Timetable
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Event</span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="ajaxify" to="/configuration/event/school_calendar">
                        School Calendar
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/configuration/event/school_notification">
                        School Notification
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="ajaxify" to="/configuration/library">
                    Library
                  </Link>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Extra Activities </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="ajaxify" to="/configuration/extra/sport">
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/configuration/extra/club">
                        Club
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/configuration/extra/fellowship">
                        Fellowship
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-user"></i>
                <span className="title">Student </span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href=":;">
                    <span className="title">Admission </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="ajaxify" to="/student/admission/add_student">
                        Add Student
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/admission/new_student">
                        New Students
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/admission/active_student">
                        Active Students
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/admission/inactive_student">
                        Inactive Students
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Files </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="student_biometric.php">
                        Student Biometric
                      </a>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/vocation">
                        Student Vocation
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/result">
                        Student Result
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/behaviour">
                        Student Behaviour
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/remark">
                        Student Remark
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/attendance">
                        Student Attendance
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/medical">
                        Student Medical
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/library">
                        Student Library
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/travel">
                        Student Travel
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/discipline">
                        Student Discipline
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/files/document">
                        Student Document
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Task </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href=":;">
                        <span className="title">Fees </span>
                        <span className="selected"></span>
                        <span className="arrow open"></span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link className="ajaxify" to="/student/task/fees/class_fees">
                            Class Fees
                          </Link>
                        </li>
                        <li>
                          <Link className="ajaxify" to="/student/task/fees/student_fees">
                            Student Fees
                          </Link>
                        </li>
                        <li>
                          <Link className="ajaxify" to="/student/task/fees/payments">
                            Fee Payments
                          </Link>
                        </li>
                        <li>
                          <Link className="ajaxify" to="/student/task/fees/transaction">
                            Fee Transaction
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/task/student_change">
                        Student Change
                      </Link>
                    </li>
                    <li>
                      <Link className="ajaxify" to="/student/task/promotion">
                        Class Promotion
                      </Link>
                    </li>
                    <li>
                      <a href=":;">
                        <span className="title">File Upload </span>
                        <span className="selected"></span>
                        <span className="arrow open"></span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link className="ajaxify" to="/student/task/file_upload/result">
                            Student Result
                          </Link>
                        </li>
                        <li>
                          <Link className="ajaxify" to="/student/task/file_upload/behaviour">
                            Student Behaviour
                          </Link>
                        </li>
                        <li>
                          <Link className="ajaxify" to="/student/task/file_upload/remark">
                            Student Remark
                          </Link>
                        </li>
                        <li>
                          <Link className="ajaxify" to="/student/task/file_upload/attendance">
                            Student Attendance
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="ajaxify" href="hostel_allocation.php">
                        Hostel Allocation{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="sport_members.php">
                        Sport Members{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="club_members.php">
                        Club Members{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="Fellowship_members.php">
                        Fellowship Members{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Setup </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="fee_group_setup.php">
                        Fee Group
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="fee_setup.php">
                        Fee Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="booklist_setup.php">
                        Booklist Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="hostel_setup.php">
                        Hostel Setup
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-user-female"></i>
                <span className="title">Parent </span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="add_parent.php">
                    Add Parent{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="existing_parents.php">
                    Existing Parents{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="parent_change.php">
                    Parent Change{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-users"></i>
                <span className="title">Employee </span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href=":;">
                    <span className="title">Employment </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="add_employee.php">
                        Add Employee{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="new_employees.php">
                        New Employees{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="active_employees.php">
                        Active Employees{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="inactive_employees.php">
                        Inactive Employees{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Files </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="biometric_record.php">
                        Employee Biometric{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="evaluation.php">
                        Employee Appraisal{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="attendance_record.php">
                        Employee Attendance{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="medical_record.php">
                        Employee Medical{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="library_record.php">
                        Employee Library{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="leave_record.php">
                        Employee Leave{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="disciplinary_record.php">
                        Employee Discipline{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="document_record.php">
                        Employee Document{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Task </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="monthly_variables.php">
                        Monthly Variables{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="information_change.php">
                        Employee Change{" "}
                      </a>
                    </li>
                    <li>
                      <a href=":;">
                        <span className="title">File Upload </span>
                        <span className="selected"></span>
                        <span className="arrow open"></span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a
                            className="ajaxify"
                            href="upload_employee_attendance.php"
                          >
                            Employee Attendance{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="ajaxify"
                            href="upload_employee_evaluation.php"
                          >
                            Employee Evaluation{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href=":;">
                        <span className="title">Staff Loan </span>
                        <span className="selected"></span>
                        <span className="arrow open"></span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a className="ajaxify" href="add_loan.php">
                            Add Loan{" "}
                          </a>
                        </li>
                        <li>
                          <a className="ajaxify" href="approved_loans.php">
                            Approved Loans{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="ajaxify" href="staff_suspension.php">
                        Staff Suspensions{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="staff_arrears.php">
                        Staff Arrears{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="sport_staffs.php">
                        Sport Staffs{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="club_staffs.php">
                        Club Staffs{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="Fellowship_staffs.php">
                        Fellowship Staffs{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Setup </span>
                    <span className="selected"></span>
                    <span className="arrow open"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="salary_setup.php">
                        Salary Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="allowance_setup.php">
                        Earning Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="deduction_setup.php">
                        Deduction Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="bank_setup.php">
                        Bank Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="loan_setup.php">
                        Loan Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="pfa_setup.php">
                        PFA Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="attendance_setup.php">
                        Attendance Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="medical_setup.php">
                        Medical Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="leave_setup.php">
                        Leave Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="discipline_setup.php">
                        Discipline Setup
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-graduation"></i>
                <span className="title">Alumni </span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="prospective_members.php">
                    Prospective Members{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="active_members.php">
                    Active Members{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="archived_members.php">
                    Archived Members{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="voluntary_donation.php">
                    Voluntary Donation{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-paper-plane"></i>
                <span className="title">Transport</span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="transport_route.php">
                    Transport Route{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="schedule_trip.php">
                    Schedule Trip{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="bus_maintenance.php">
                    Bus Maintenance{" "}
                  </a>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Setup</span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="route_setup.php">
                        Route Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="bus_setup.php">
                        Bus Setup
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-control-play"></i>
                <span className="title">Payroll </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="run_payroll.php">
                    Run Payroll{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="end_payroll.php">
                    End Payroll{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-calculator"></i>
                <span className="title">Accounting </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href=":;">
                    <span className="title">Files</span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="accounting/customer.php">
                        Customer{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="accounting/supplier.php">
                        Supplier
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="accounting/stock.php">
                        Stock
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="accounting/fixed_asset.php">
                        Fixed Asset
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/nominal_account.php"
                      >
                        Nominal Account (GL)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Transactions</span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/customer_invoice.php"
                      >
                        Customer Invoice
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/customer_receipt.php"
                      >
                        Customer Receipt
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/supplier_invoice.php"
                      >
                        Supplier Invoice
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/payment_voucher.php"
                      >
                        Payment Voucher
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/stock_adjustment.php"
                      >
                        Stock Adjustment
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/journal_entry.php"
                      >
                        Journal Entry
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Setup</span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/customer_category.php"
                      >
                        Customer Category
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/supplier_category.php"
                      >
                        Supplier Category
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/stock_category.php"
                      >
                        Stock Category
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="accounting/product_list.php">
                        Product List
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/store_location.php"
                      >
                        Store Location
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="accounting/asset_category.php"
                      >
                        Asset Category
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="accounting/currency.php">
                        Currency Setup
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="accounting/tax.php">
                        Tax Setup
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-graph"></i>
                <span className="title">Reports </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href=":;">
                    <span className="title">Profile Reports </span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="student_reports.php">
                        Student Reports{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="employee_reports.php">
                        Employee Reports{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="parent_reports.php">
                        Parent Reports{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="alumni_reports.php">
                        Alumni Reports{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="ajaxify" href="payroll_reports.php">
                    Payroll Reports{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="accounting_reports.php">
                    Accounting Reports{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="appraisal_reports.php">
                    Appraisal Reports{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="transport_reports.php">
                    Transport Reports{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="sms_reports.php">
                    SMS Reports{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-bar-chart"></i>
                <span className="title">Charts </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href=":;">
                    <span className="title">Student Chart </span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="student_chart.php">
                        Admission Chart{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="student_result_chart.php">
                        Result Chart{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="student_attendance_chart.php"
                      >
                        Attendance Chart{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=":;">
                    <span className="title">Employee Chart </span>
                    <span className="selected"></span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="ajaxify" href="employee_chart.php">
                        Employment Chart{" "}
                      </a>
                    </li>
                    <li>
                      <a className="ajaxify" href="employee_payroll_chart.php">
                        Payroll Chart{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="ajaxify"
                        href="employee_attendance_chart.php"
                      >
                        Attendance Chart{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="ajaxify" href="parent_chart.php">
                    Parent Chart{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="alumni_chart.php">
                    Alumni Chart{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="sms_chart.php">
                    SMS Chart{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-call-in"></i>
                <span className="title">Messaging </span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="sms.php">
                    Bulk SMS{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="email.php">
                    E-mail{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="letter.php">
                    Letter{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-plus"></i>
                <span className="title">Users </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="manage_user.php">
                    Create User{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="grant_priviledges.php">
                    Grant Priviledges{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="online_users.php">
                    Users Status{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=":;">
                <i className="icon-info"></i>
                <span className="title">Trails </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="ajaxify" href="user_log.php">
                    Login Trail{" "}
                  </a>
                </li>
                <li>
                  <a className="ajaxify" href="activity_log.php">
                    Activity Trail{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="last">
              <a href="feedback.php" className="ajaxify">
                <i className="icon-feed"></i>
                <span className="title">Feeds </span>
                <span className="selected"></span>
                <span className="arrow"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
