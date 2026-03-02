import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewStudent = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    function fetchStudents() {
        axios.get("http://localhost:8080/api/student/view")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchStudents();
    }, []);
    function handleUpdate(id) {
        navigate(`/update-student/${id}/`);
    }
    function handleDelete(id) {
        axios.delete(`http://localhost:8080/api/student/delete/${id}`)
            .then(() => {
                fetchStudents();
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "10px" }}>Students</h1>
            <div className="students-container">
                {students.map((student) => (
                    <div className="student-card" key={student.id}>
                        <h2>{student.name}</h2>
                        <p><b>Email: </b>{student.email}</p>
                        <p><b>Department: </b>{student.department}</p>
                        <p><b>Course: </b>{student.course}</p>
                        <div className="btn-container">
                            <button onClick={()=>{handleUpdate(student.id)}}>Update</button>
                            <button onClick={()=>{handleDelete(student.id)}}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <p style={{color:"grey", textAlign:"center"}}>&copy; 2025 Enrollment System. All rights reserved.</p>
        </>
    );
}
export default ViewStudent;