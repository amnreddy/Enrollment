import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            setDepartment(res.data.department);
            setCourse(res.data.course);
        })
    }, []);
    function handleUpdate(e){
        e.preventDefault();
        const data = {name, email, department, course};
        axios.put(`http://localhost:5000/users/${id}`, data)
        .then(() => {
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
                    <h1>Update Student</h1>
                    <form onSubmit={handleUpdate}>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" required />
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" required />
                        <input type="text" value={department} onChange={(e) => { setDepartment(e.target.value) }} placeholder="Enter Department" required />
                        <input type="text" value={course} onChange={(e) => { setCourse(e.target.value) }} placeholder="Enter Course" required />
                        <button className="btn">Update Student</button>
                    </form>
                </div>
                <br /><br />
                <p style={{color:"grey"}}>&copy; 2025 Enrollment System. All rights reserved.</p>
            </center>
        </>
    );
}
export default UpdateStudent;