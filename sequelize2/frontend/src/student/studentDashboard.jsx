import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export function Student() {
    return (<>
        <div>
            <h2>This is Student page</h2>
            <nav>
                <Link to='/students/street'>Student Street address</Link>
                <Link to='/students/profile'>Student Profile</Link>
            </nav>
            <Outlet />
        </div>
    </>)
}
export function Street(){
    return (<h2>This is street page</h2>)
}
export function Profile(){
    return <h2>This is profile page</h2>
}
export function Home(){
    return( <h2>This is Home page</h2>)
}

export function StudentDashboard(params) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState("");
    const [newStudent, setnewStudent] = useState('')
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
            <Link to='/students'>STudent link from return studentDashboard</Link>
        </>)
}
