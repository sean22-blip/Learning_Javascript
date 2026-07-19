import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { data, Link, Outlet, useOutletContext } from "react-router-dom";
import React from "react";
// export function Student() {
//     return (<>
//         <div>
//             <h2>This is Student page</h2>
//             <nav>
//                 <Link to='/students/street'>Student Street address</Link>
//                 <Link to='/students/profile'>Student Profile</Link>
//                 <Link to='/students/name'>Student Name</Link>
//             </nav>
//             <Outlet />
//         </div>
//     </>)
// }
export function Street() {
    return (<h2>This is street page</h2>)
}
export function Profile() {
    return <h2>This is profile page</h2>

}
export function Home() {
    return (
        <div>
            <h2>This is Home page</h2>
            <Link to="/student-dashboard">Student</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum, doloremque fuga vero reprehenderit quia, autem provident tenetur libero dolore et? Adipisci delectus minus, ad placeat in qui deleniti doloremque?</p>

        </div>
    )
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

export function StudentDashboard(params) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState([]);
    const [newStudent, setnewStudent] = useState([])
    useEffect(() => {
        async function fetchData(params) {
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
                <nav className="font-bold text-lg ml-[2em] mb-2">
                    <Link to="/">Home</Link>
                </nav>
                <div className="flex justify-around py-2  bg-[#1792ff] ">
                    <nav className="flex text-white font-semibold gap-[10em]">
                        <Link to='/student-dashboard/street' className="hover:text-[#e19528]">Student Street address</Link>
                        <Link to='/student-dashboard/profile' className="hover:text-[#e19528]">Student Profile</Link>
                        <Link to='/student-dashboard/name' className="hover:text-[#e19528]">Student Name</Link>
                    </nav>
                </div>

                <Outlet context={student} />
            </div>
        </>)
}
