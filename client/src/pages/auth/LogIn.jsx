import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../helper/validate";
import { login } from "../../helper/helper";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/store";
import Header from "../../components/header/Header"
import profileImg from "../../assets/images/nadun.png"
import { AuthBackground, AuthButton, AuthCaro, AuthCaroContent, AuthCaroDesc, AuthCaroDot, AuthContainer, AuthContainerLeft, AuthContainerRight, AuthCroDotMin, AuthImage, AuthInput, AuthNavigate, AuthNavigateLinkA, AuthNavigateLinkB, AuthTital, CancelIcon } from "./authStyle";

export default function LogIn() {

    const navigate = useNavigate();
    const [invalidEmail, setInvalidEmail] = useState("");
    const [invalidPassword, setInvalidPassword] = useState("");
    const setUsername = useAuthStore(state => state.setUsername);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, onSubmitProps) => {
            let loginPromise = await login(values);
            if (loginPromise === "Username not Found") {
                setInvalidEmail(loginPromise);
                setInvalidPassword("");
            }
            if (loginPromise === "Password does not match") {
                setInvalidPassword(loginPromise);
                setInvalidEmail("");
                setUsername(values.username);
            }

            if (loginPromise.data.msg === "Login Successfully...!") {
                let { token } = loginPromise.data;
                localStorage.setItem("token", token);
                setUsername(values.username);
                onSubmitProps.resetForm();

                if (loginPromise.data.role === "user") {
                    navigate("/home");
                }
                if (loginPromise.data.role === "admin") {
                    navigate("/admin");
                }
                if (loginPromise.data.role === "GN") {
                    navigate("/gramasewaka");
                }
                if (loginPromise.data.role === "RCEP") {
                    navigate("/receptionist");
                }
            }
            console.log(loginPromise);
        },
    });

    const [index, setIndex] = useState(0);

    const caroDetail = [
        {
            image: profileImg,
            descreption: "DENGUE FEVER ?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            image: profileImg,
            descreption: "Nadun Viduranga ?",
            content: "Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            image: profileImg,
            descreption: "Dasith Jaya ?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.",
        },
    ];

    useEffect(() => {
        const slideIntaval = setInterval(() => {
            setIndex(index => index < caroDetail.length - 1 ? index + 1 : 0);
        }, 3000)
        
        return () => clearInterval(slideIntaval)
    }, [caroDetail.length])

    return (
        <AuthBackground>
            <Header />

            <AuthContainer>
                <AuthContainerLeft>
                    <AuthCaro>
                        <AuthImage>
                            <img src={caroDetail[index].image} alt="Profile 4to" />
                        </AuthImage>
                        <AuthCaroDesc>{caroDetail[index].descreption}</AuthCaroDesc>
                        <AuthCaroContent>{caroDetail[index].content}</AuthCaroContent>
                    </AuthCaro>
                    <AuthCaroDot>
                        <AuthCroDotMin $isActive={0 === index} onClick={() => setIndex(0)}></AuthCroDotMin>
                        <AuthCroDotMin $isActive={1 === index} onClick={() => setIndex(1)}></AuthCroDotMin>
                        <AuthCroDotMin $isActive={2 === index} onClick={() => setIndex(2)}></AuthCroDotMin>
                    </AuthCaroDot>
                </AuthContainerLeft>

                <AuthContainerRight>
                    <CancelIcon>
                        <AuthNavigateLinkB to="/">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </AuthNavigateLinkB>
                    </CancelIcon>
                    <AuthTital>Login</AuthTital>
                    <form onSubmit={formik.handleSubmit}>
                        <AuthInput>
                            <input
                                {...formik.getFieldProps("username")}
                                type="text"
                                placeholder="Enter your email*"
                                className={
                                    formik.errors.username ? "input-error" : ""
                                }
                            />
                            {(formik.errors.username && (
                                <p className="error">
                                    {formik.errors.username}
                                </p>
                            )) ||
                                (invalidEmail && (
                                    <p className="error">{invalidEmail}</p>
                                ))}
                        </AuthInput>

                        <AuthInput>
                            <input
                                {...formik.getFieldProps("password")}
                                type="password"
                                placeholder="Enter your password*"
                                className={
                                    formik.errors.password ? "input-error" : ""
                                }
                            />
                            {(formik.errors.password && (
                                <p className="error">
                                    {formik.errors.password}
                                </p>
                            )) ||
                                (invalidPassword && (
                                    <p className="error">{invalidPassword}</p>
                                ))}
                        </AuthInput>

                        <AuthNavigateLinkA to="/recovery">
                            Forgot your Password ?
                        </AuthNavigateLinkA>

                        <AuthButton type="submit">Login</AuthButton>

                        <AuthNavigate>
                            Don't have an account ?{" "}
                            <AuthNavigateLinkB to="/register">
                                Register
                            </AuthNavigateLinkB>
                        </AuthNavigate>
                    </form>
                </AuthContainerRight>
            </AuthContainer>
        </AuthBackground>
    );

}
