import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StudentDashboard, Home, Street, Profile, Name } from './student/studentDashboard'

function App() {
  return (<>
    <BrowserRouter>

     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route path="profile" element={<Profile />} ></Route>
          <Route path="street" element={<Street />}></Route>
          <Route path="name" element={<Name />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  </>)
}
export default App;