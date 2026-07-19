import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function DepartmentDashboard() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:5000/api/Departments`);
        console.log("User data: ", res.data);
        setDepartment(res.data);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (error) {
    return <h1>Error...</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className=" flex m-10 justify-center bg-blue-400 text-white text-center p-[1em] rounded-lg ">
        {department.map((data, index) => (
        <ul>
          <li key={index}> Department_ID: {data.department_id} |
              Department_Name: {data.department_name} |
              Description: {data.description} 
          </li>
        </ul>
        ))}
        <Outlet context={department}/>
      </div>
    </>
  );
}
