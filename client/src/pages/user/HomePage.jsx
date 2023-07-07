import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    // logout handler function
    function userLogout() {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={userLogout} className="loginRegisterButton">
                Logout
            </button>
        </div>
    );
}
