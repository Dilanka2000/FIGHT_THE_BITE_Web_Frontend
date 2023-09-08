import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }

    return children;
}

export const AuthorizeAdmin = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }
    else {
        let decode = jwt_decode(token);
        if (decode.role !== "admin") {
            return <Navigate to={'/login'} replace={true}></Navigate>
        }
    }

    return children;
}

export const AuthorizeGN = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }
    else {
        let decode = jwt_decode(token);
        if (decode.role !== "GN") {
            return <Navigate to={'/login'} replace={true}></Navigate>
        }
    }

    return children;
}


