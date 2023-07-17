import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../../helper/validate";
import { registerUser } from "../../helper/helper";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import profileImg from "../../assets/images/nadun.png";
import { AuthBackground, AuthButton, AuthCaro, AuthCaroContent, AuthCaroDesc, AuthCaroDot, AuthContainer, AuthContainerLeft, AuthContainerRight, AuthCroDotMin, AuthImage, AuthInput, AuthNavigate, AuthNavigateLinkB, AuthTital, CancelIcon } from "./authStyle";

export default function Register() {
    const navigate = useNavigate();
    const [emailExist, setEmailExsist] = useState("");

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: registerSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            let registerPromise = await registerUser(values);
            if (registerPromise === "Please use unique Email") {
                setEmailExsist(registerPromise);
            }

            if (registerPromise === "Register Successfully") {
                navigate("/login");
            }
            console.log(registerPromise);
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
                            <img
                                src={caroDetail[index].image}
                                alt="Profile 4to"
                            />
                        </AuthImage>
                        <AuthCaroDesc>
                            {caroDetail[index].descreption}
                        </AuthCaroDesc>
                        <AuthCaroContent>
                            {caroDetail[index].content}
                        </AuthCaroContent>
                    </AuthCaro>
                    <AuthCaroDot>
                        <AuthCroDotMin
                            $isActive={0 === index}
                            onClick={() => setIndex(0)}
                        ></AuthCroDotMin>
                        <AuthCroDotMin
                            $isActive={1 === index}
                            onClick={() => setIndex(1)}
                        ></AuthCroDotMin>
                        <AuthCroDotMin
                            $isActive={2 === index}
                            onClick={() => setIndex(2)}
                        ></AuthCroDotMin>
                    </AuthCaroDot>
                </AuthContainerLeft>

                <AuthContainerRight>
                    <CancelIcon>
                        <AuthNavigateLinkB to="/">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </AuthNavigateLinkB>
                    </CancelIcon>
                    <AuthTital>Create Your Account</AuthTital>
                    <form onSubmit={formik.handleSubmit}>
                        <AuthInput>
                            <input
                                {...formik.getFieldProps("name")}
                                type="text"
                                placeholder="Enter your name"
                                className={formik.errors.name ? "input-error" : ""}
                            />
                            {formik.errors.name && (
                                <p className="error">{formik.errors.name}</p>
                            )}
                        </AuthInput>

                        <AuthInput>
                            <input
                                {...formik.getFieldProps("email")}
                                type="email"
                                placeholder="Enter your email"
                                className={formik.errors.email || emailExist ? "input-error" : ""}
                            />
                            {(formik.errors.email && (
                                <p className="error">{formik.errors.email}</p>
                            )) ||
                                (emailExist && <p className="error">{emailExist}</p>)}
                        </AuthInput>

                        <AuthInput>
                            <input
                                {...formik.getFieldProps("password")}
                                type="password"
                                placeholder="Enter your password"
                                className={formik.errors.password ? "input-error" : ""}
                            />
                            {formik.errors.password && (
                                <p className="error">{formik.errors.password}</p>
                            )}
                        </AuthInput>

                        <AuthInput>
                            <input
                                {...formik.getFieldProps("confirmPassword")}
                                type="password"
                                placeholder="Enter your password again"
                                className={
                                    formik.errors.confirmPassword ? "input-error" : ""
                                }
                            />
                            {formik.errors.confirmPassword && (
                                <p className="error">{formik.errors.confirmPassword}</p>
                            )}
                        </AuthInput>

                        <AuthButton type="submit">Create an Account</AuthButton>

                        <AuthNavigate>
                            Already have an account ?{" "}
                            <AuthNavigateLinkB to="/login">
                                Login
                            </AuthNavigateLinkB>
                        </AuthNavigate>
                    </form>
                </AuthContainerRight>
            </AuthContainer>
        </AuthBackground>
    );
}
