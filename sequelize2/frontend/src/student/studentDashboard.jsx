import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

async function StudentDashboard(params) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState("");
    useEffect(() => {
        try {

        } catch (error) {
            setError(true);
        }


    }, [])
    if (error) {
        setError(true)
        setLoading(false);
        <h1>Errror...</h1>
    }
    if (loading) {
        setLoading(true)
        return <h1>Loading ...</h1>
    }

    return(
    <>
    

    </>)
}