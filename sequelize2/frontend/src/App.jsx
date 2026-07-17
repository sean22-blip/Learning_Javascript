import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Student, Home, Street, Profile, Name } from './student/studentDashboard'

function App() {
  return (<>
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Student</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/students" element={<Student />}>
          <Route path="profile" element={<Profile />} ></Route>
          <Route path="street" element={<Street />}></Route>
          <Route path="name" element={<Name />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  </>)
}
export default App;