import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { data, Link, Outlet } from "react-router-dom";
import React from "react";
export function Student() {
    return (<>
        <div>
            <h2>This is Student page</h2>
            <nav>
                <Link to='/students/street'>Student Street address</Link>
                <Link to='/students/profile'>Student Profile</Link>
                <Link to='/students/name'>Student Name</Link>
            </nav>
            <Outlet />
        </div>
    </>)
}
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum, doloremque fuga vero reprehenderit quia, autem provident tenetur libero dolore et? Adipisci delectus minus, ad placeat in qui deleniti doloremque?</p>

        </div>
    )
}
export function Name() {
    return (
        <div>
            <h2>This is the list of all Student</h2>
            <h3>Student Name: </h3>
            <ul>
                {student.map((data, index) => (
                    <li key={index}> First Name: {data.first_name} Last Name: {data.last_name}</li>
                    // <li >Student LastName: {data.last_name}</li>
                ))}
            </ul>
            {/* <ul>
                {student.map((data, index) => (
                    <React.Fragment key={index}>
                        <li>Student First Name: {data.first_name}</li>
                        <li >Student LastName: {data.last_name}</li>
                    </React.Fragment>

                ))}
            </ul> */}
        </div>
    )
}

export function StudentDashboard(params) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState("");
    const [newStudent, setnewStudent] = useState([])
    useEffect(() => {
        async function fetchData(params) {


            try {
                // axios.get('https://localhost:5000/Students',{
                //     headers: {
                //         'Authorization': `Bearer ${process.env.SECRET_ACCESS_TOKEN}`
                //     }
                // })
                const res = await axios.get(`https://localhost:5000/api/Students`);
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
        
        </>)
}
