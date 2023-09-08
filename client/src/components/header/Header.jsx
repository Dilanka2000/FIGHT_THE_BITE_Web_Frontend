import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoIcon from "../../assets/images/logo-sidebar.png";

export default function Header() {
    // const user = 0;

    return (
        <header className="top">
            <div className="topLeft">
                <Link to="/">
                    <img src={logoIcon} alt="LOGO" className="topIcon" />
                </Link>
            </div>

            <div className="topCenter">
                {/* <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>
                </ul> */}
            </div>

            <div className="topRight">
                {/* {user ? (
                    <ul className="topList">
                        <li className="topListItem">ABC Silva</li>
                        <li className="topListItem">
                            <Link className="link" to="/">
                                {user && "LOGOUT"}
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )} */}
            </div>
        </header>
    );
}
