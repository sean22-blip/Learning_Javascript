import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentDashboard, Home, Street, Profile, Name } from './student/studentDashboard.jsx'
import { DepartmentDashboard } from "./department/departmentDashboard.jsx";
function App() {
  return (<>
    <BrowserRouter>

     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route path="profile" element={<Profile />} ></Route>
          <Route path="street" element={<Street />}></Route>
          <Route path="department" element={<DepartmentDashboard />}></Route>
          <Route path="name" element={<Name />}></Route>
        </Route>

          <Route path="/department-dashboard" element={<DepartmentDashboard />}></Route>
      </Routes>

    </BrowserRouter>
  </>)
}
export default App;