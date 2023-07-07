import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function EmployeeHeader() {
    return (
        <header className="top">
            <div className="topLeft">
            </div>

            <div className="topCenter"></div>

            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">ABC Silva</li>
                    <li className="topListItem">
                            <Link className="link" to="/employeelogin">
                                LOGOUT
                            </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
