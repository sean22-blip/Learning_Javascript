import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

async function StudentDashboard(params) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState("");
    const [newStudent, setnewStudent] = useState('')
    useEffect(() => {
        try {
            // axios.get('https://localhost:5000/Students',{
            //     headers: {
            //         'Authorization': `Bearer ${process.env.}`
            //     }
            // })
            const res = axios.get(`https://localhost:5000/api/Students`);
            console.log(`User data:`, res.data);
            setLoading(false);
        } catch (error) {
            console.log("Error", error)
            setError(true);
            setLoading(false)
        }


    }, [])
    if (error) {
       return <h1>Errror...</h1>
    }
    if (loading) {
        return <h1>Loading ...</h1>
    }

    return(
    <>
    <div><h2>All Studen</h2>
    <ul>
        {student.localeCompare((s, index) => (
            <li key={index}>{s}</li>
        ))}
    </ul>
    </div>

    </>)
}