import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`!@#$%^&*()_+\-={};':"|,.<>?~/[\]]).{6,}$/;
const emailRule = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const nameRule = /^[a-zA-Z .]{2,40}$/;
const contactRule = /^[0][\d]{9}$/;
const nicRule = /^(([5,6,7,8,9]{1})([0-9]{1})([0,1,2,3,5,6,7,8]{1})([0-9]{6})([v|V|x|X]))|(([1,2]{1})([0,9]{1})([0-9]{2})([0,1,2,3,5,6,7,8]{1})([0-9]{7}))$/;
const ageRule = /^([1,2,3,4,5,6,7,8,9]{1}$|([1,2,3,4,5,6,7,8,9]{1})([\d]){1})$|(([1][0,1]{1})([\d]{1}))$/;


export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email")
        .required("Field Required!"),
    password: yup
        .string()
        .required("Field Required!"),
});

export const resetSchema = yup.object().shape({
    password: yup
        .string()
        .min(6)
        .matches(passwordRule, "Must have upper case letter, lover case letter, numaric number and special charactor")
        .required("Field Required!"),
    confirmPassword: yup
        .string()
        .required("Field Required!")
        .oneOf([yup.ref('password'), null], 'Passwords not match')
});

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    password: yup
        .string()
        .min(6)
        .matches(passwordRule, "Must have upper case letter, lover case letter, numaric number and special charactor")
        .required("Field Required!"),
    confirmPassword: yup
        .string()
        .required("Field Required!")
        .oneOf([yup.ref('password'), null], 'Passwords not match')
});

export const villageOfficerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    address: yup.string().required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!")
        .matches(nicRule, "Invalid NIC!"),
    contact: yup
        .string()
        .required("Field Required!")
        .matches(contactRule, "Invalid contact number!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivision: yup.string().required("Field Required!"),
    divisionNumber: yup.string().required("Field Required!"),
    password: yup
        .string()
        .min(6)
        .matches(
            passwordRule,
            "Must have upper case letter, lover case letter, numaric number and special charactor"
        )
        .required("Field Required!"),
});

export const villageOfficerUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    address: yup.string().required("Field Required!"),
    nic: yup.string().required("Field Required!"),
    contact: yup
        .string()
        .required("Field Required!")
        .matches(contactRule, "Invalid contact number!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivision: yup.string().required("Field Required!"),
    divisionNumber: yup.string().required("Field Required!"),
});

export const PHISchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    address: yup.string().required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!")
        .matches(nicRule, "Invalid NIC!"),
    contact: yup
        .string()
        .required("Field Required!")
        .matches(contactRule, "Invalid contact number!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivisions: yup.array().required("Field Required!").min(1, "Required"),
});

export const PHIUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    address: yup.string().required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!")
        .matches(nicRule, "Invalid NIC!"),
    contact: yup
        .string()
        .required("Field Required!")
        .matches(contactRule, "Invalid contact number!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivisions: yup.array().required("Field Required!"),
});

export const orgSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivision: yup.string().required("Field Required!"),
    divisionNumber: yup.string().required("Field Required!"),
    contact: yup
        .string()
        .required("Field Required!")
        .matches(contactRule, "Invalid contact number!"),
    boardName: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    boardAddress: yup.string().required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!")
        .matches(nicRule, "Invalid NIC!"),
    boardPhone: yup.string().required("Field Required!"),
    boardEmail: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
});

export const orgUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivision: yup.string().required("Field Required!"),
    divisionNumber: yup.string().required("Field Required!"),
    contact: yup
        .string()
        .required("Field Required!")
        .matches(contactRule, "Invalid contact number!"),
    boardName: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    boardAddress: yup.string().required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!")
        .matches(nicRule, "Invalid NIC!"),
    boardPhone: yup.string().required("Field Required!"),
    boardEmail: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
});

export const fammilySchema = yup.object().shape({
    address: yup.string().required("Field Required!"),
    houseHoldNo: yup.string().required("Field Required!"),
    members: yup
        .array(
            yup.object({
                name: yup
                    .string()
                    .required("Field Required!")
                    .matches(nameRule, "Invalid name!"),
                nic: yup
                    .string()
                    .required("Field Required!")
                    .matches(nicRule, "Invalid NIC!"),
                gender: yup.string(),
                age: yup
                    .string()
                    .required("Field Required!")
                    .matches(ageRule, "Age must be in range 1-120!"),
                contact: yup
                    .string()
                    .required("Field Required!")
                    .matches(contactRule, "Invalid contact number!"),
            })
        )
        .min(2)
});



//---------------------------------addUpdateDoctor---------------------------------------------------

export const doctorSchema = yup.object().shape({
    registrationNumber: yup
        .string()
        .required("Field Required!"),
        name: yup
        .string()
        .required("Field Required!"),
        nic: yup
        .string()
        .required("Field Required!"),
        email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!"),
        wardNo: yup
        .string()
        .required("Field Required!"),
   
    
});




export const doctorUpdateSchema = yup.object().shape({
    registrationNumber: yup
        .string()
        .required("Field Required!"),
        name: yup
        .string()
        .required("Field Required!"),
        nic: yup
        .string()
        .required("Field Required!"),
        email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!"),
         wardNo: yup
        .string()
        .required("Field Required!"),
    
});

//------------------------------------------AddUpdateNurse-------------------------------------------

export const nurseSchema = yup.object().shape({
    registrationNumber: yup
        .string()
        .required("Field Required!"),
        name: yup
        .string()
        .required("Field Required!"),
        nic: yup
        .string()
        .required("Field Required!"),
        email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!")
        
    
});




export const nurseUpdateSchema = yup.object().shape({
    registrationNumber: yup
        .string()
        .required("Field Required!"),
        nic: yup
        .string()
        .required("Field Required!"),
        name: yup
        .string()
        .required("Field Required!"),
        email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!")
    
});

