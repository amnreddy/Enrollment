import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>
                <div className="left">
                    <h3>EduFlow Pro</h3>
                </div>
                <div className="right">
                    <Link to="/">Home</Link>
                    <Link to="/add-student">Add Student</Link>
                    <Link to="/view-student">View Student</Link>
                </div>
            </nav>
        </>
    );
}
export default Nav;