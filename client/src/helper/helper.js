import axios from "axios";
import jwt_decode from "jwt-decode";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;



/** Make API Requests */

// Authenticate function
// export async function authenticate(username) {
//     try {
//         return await axios.post('/api/authenticate', { username });
//     } catch (error) {
//         return { error: "Username doesn't exist" };
//     }
// }


// To get username from Token
export async function getUsername() {
    const token = localStorage.getItem('token');
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token);
    return decode.username;
}
// To get userrole from Token
export async function getUserRole() {
    const token = localStorage.getItem('token');
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token);
    return decode.role;
}

// Login user
export async function loginUser() {
    const token = localStorage.getItem("token");
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token).userId;
    let user = await getUser({ id: decode });
    // console.log(user);
    return Promise.resolve(user.data);
}

// Get user details function
export async function getUser({ id }) {
    try {
        const { data } = await axios.get(`/api/user/${id}`);
        return { data };
    } catch (error) {
        return { error: "User not found" };
    }
}
export async function getUserByEmail({ username }) {
    try {
        const { data } = await axios.get(`/api/getUser/${username}`);
        return { data };
    } catch (error) {
        return { error: "User not found" };
    }
}

// Register user function
export async function registerUser(credentials) {
    try {
        const { data: { msg }, status } = await axios.post('/api/register', credentials);

        let { name, email, password } = credentials;
        // send mail
        if (status === 201) {
            await axios.post('/api/registerMail', { name, userEmail: email, text: msg+"\nYour Password is :- "+password });
        }

        return Promise.resolve(msg);
    } catch (error) {
        return (error.response.data.error);
    }
}

// Login function
export async function login({ username, password }) {
    try {
        if (username) {
            const { data } = await axios.post('/api/login', { username, password });
            return Promise.resolve({ data });
        }
    } catch (error) {
        return (error.response.data.error);
    }
}

// Update user profile function
export async function updateUser(response) {
    try {
        const token = await localStorage.getItem('token');
        const { data: { msg } } = await axios.put('/api/updateuser', response, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error: "Couldn't Update Profile" });
    }
}

// Accept Campaign function
export async function acceptCampaignStatus(id) {
    try {
        const token = await localStorage.getItem('token');
        const { data: { msg } } = await axios.put(`/api/acceptCampaign/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error: "Couldn't Update Profile" });
    }
}

// Delete data function
export async function deleteData({id}) {
    try {
        const username = await getUsername();
        const { data: { msg } } = await axios.delete(`/api/deletedata/${id}`, { params: { username } });
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error: "Couldn't Delete Data" });
    }
}

// Generate OTP
export async function generateOTP(username) {
    try {
        const { data: { code }, status } = await axios.get('/api/generateOTP', { params: { username } });

        // Send mail with the OTP
        if (status === 201) {
            let { data: { name } } = await getUserByEmail({ username });
            let text = `Your password recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/registerMail', { name, userEmail: username, text, subject: "Password Recovery OTP" });
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

// Verify OTP
export async function verifyOTP({ username, code }) {
    try {
        const { data, status } = await axios.get('/api/verifyOTP', { params: { username, code } });
        return { data, status };
    } catch (error) {
        return error.response.data.error;
    }
}

// Reset password
export async function resetPassword({ username, password }) {
    try {
        const { data, status } = await axios.put('/api/resetPassword', { username, password });
        return Promise.resolve({ data, status });
    } catch (error) {
        return Promise.reject({ error });
    }
}

// Add fammily function
export async function addFammily(credentials) {
    try {
        console.log(credentials);
        const { data: { msg } } = await axios.post('/api/addfammily', credentials);

        return Promise.resolve(msg);
    } catch (error) {
        return (error.response.data.error);
    }
}

// Add fammily function
export async function addAnnouncement(credentials) {
    try {
        console.log(credentials);
        const { data: { msg } } = await axios.post('/api/addannouncement', credentials);

        return Promise.resolve(msg);
    } catch (error) {
        return (error.response);
    }
}