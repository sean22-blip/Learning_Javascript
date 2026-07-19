import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { DepartmentDashboard } from "../department/departmentDashboard";
export function Street() {
    return (<h2>This is street page</h2>)
}
export function Profile() {
    return <h2>This is profile page</h2>

}
export function Home() {
    return (
        <div className="">
            <h2 className="text-center text-5xl font-bold m-10">This is Home page</h2>
            <h1 className="text-center font-semibold text-2xl">Introduction to Home page</h1>
            <div className="flex bg-blue-400 text-white font-semibold w-[80%] justify-center mx-auto mt-[2em] rounded-lg p-5">
                <p>Welcome to the Student Dashboard — your central hub for managing academic information with ease. Here, you can view student records, track enrollment details, and keep everything organized in one clean, easy-to-navigate interface. Whether you're adding new students, updating existing information, or simply browsing through the list, this page is designed to make the process simple and efficient. Explore the table below to get started.</p>
            </div>
            <div className="ml-[10em] mt-5">
                <Link to="/student-dashboard" className="text-lg font-bold hover:text-blue-600 ml-[2em] mb-2">Go to Student Page</Link>
            </div>

        </div>
    )
}
export function DepDashboard(){
    
}

export function Name() {
    const student = useOutletContext();
    return (
        <div className="flex flex-col items-center justify-center m-[3em]">
            <h2 className="font-bold text-lg">Student Name</h2>
            <div className=" flex flex-col text-black p-5 bg-blue-100 w-[100%]  rounded-[1em] ">
                <table className="text-lg">
                    <thead className=" ">
                        <tr >
                            <th  >First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-300 text-black">
                        {student.map((data, index) => (
                            <tr key={index} className=" bg-gray-200">
                                <td className="text-center">
                                    <ul >
                                        <li>{data.first_name}</li>
                                    </ul>
                                </td>
                                <td className="text-center">
                                    <ul>
                                        <li>{data.last_name}</li>
                                    </ul>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export function StudentDashboard() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState([]);
    // const [newStudent, setnewStudent] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:5000/api/Students`);
                console.log(`User data:`, res.data);
                setStudent(res.data);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
                setError(true);
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    if (error) {
        return <h1>Errror...</h1>
    }
    if (loading) {
        return <h1>Loading ...</h1>
    }
    return (
        <>
            <div>
                <h2 className="m-10 text-center font-bold text-3xl ">This is Student page</h2>

                <div className="flex justify-around py-2  bg-[#1792ff] ">
                    <nav className="flex text-white font-semibold gap-[10em]">
                        <Link to='/student-dashboard/street' className="hover:text-[#e19528]">Student Street address</Link>
                        <Link to='/student-dashboard/profile' className="hover:text-[#e19528]">Student Profile</Link>
                        <Link to='/student-dashboard/name' className="hover:text-[#e19528]">Student Name</Link>
                        <Link to='/student-dashboard/department' className="hover:text-[#e19528]">Department Dashboard</Link>
                    </nav>
                </div>
                <nav className="font-bold text-lg ml-[5em] mb-2 mt-10">
                    <Link to="/" className="text-lg font-bold hover:text-blue-600"> Return to home page</Link>
                </nav>
                <Outlet context={student} />
            </div>
        </>)
}
