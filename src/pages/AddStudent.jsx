import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const data = { name, email, department, course };
        axios.post("http://localhost:8080/api/student/add", data)
            .then(() => {
                setName("");
                setEmail("");
                setDepartment("");
                setCourse("");
                navigate("/view-student");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <center>
                <div className="addstudent">
                    <h1>Add Student</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" required />
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" required />
                        <input type="text" value={department} onChange={(e) => { setDepartment(e.target.value) }} placeholder="Enter Department" required />
                        <input type="text" value={course} onChange={(e) => { setCourse(e.target.value) }} placeholder="Enter Course" required />
                        <button className="btn">Add Student</button>
                    </form>
                </div>
                <br /><br />
                <p style={{color:"grey"}}>&copy; 2025 Enrollment System. All rights reserved.</p>
            </center>
        </>
    );
}
export default AddStudent;