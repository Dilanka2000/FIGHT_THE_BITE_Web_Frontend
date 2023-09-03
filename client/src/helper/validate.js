import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`!@#$%^&*()_+\-={};':"|,.<>?~/[\]]).{6,}$/;
const emailRule = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const nameRule = /^[a-zA-Z .]{2,40}$/;


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
    address: yup
        .string()
        .required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!"),
    contact: yup
        .string()
        .required("Field Required!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivision: yup
        .string()
        .required("Field Required!"),
    divisionNumber: yup
        .string()
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

export const villageOfficerUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    address: yup
        .string()
        .required("Field Required!"),
    nic: yup
        .string()
        .required("Field Required!"),
    contact: yup
        .string()
        .required("Field Required!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    gsDivision: yup
        .string()
        .required("Field Required!"),
    divisionNumber: yup
        .string()
        .required("Field Required!")
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
  contact: yup.string().required("Field Required!"),
  boardName: yup
    .string()
    .required("Field Required!")
    .matches(nameRule, "Invalid name!"),
  boardAddress: yup.string().required("Field Required!"),
  nic: yup.string().required("Field Required!"),
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
  contact: yup.string().required("Field Required!"),
  boardName: yup
    .string()
    .required("Field Required!")
    .matches(nameRule, "Invalid name!"),
  boardAddress: yup.string().required("Field Required!"),
  nic: yup.string().required("Field Required!"),
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
    // members: [
    //     {
    //         name: yup
    //             .string()
    //             .required("Field Required!")
    //             .matches(nameRule, "Invalid name!"),
    //         nic: yup.string().required("Field Required!"),
    //         // gender: yup
    //         age: yup.number().required("Field Required!"),
    //         contact: yup.string().required("Field Required!"),
    //     },
    // ],
});



//---------------------------------addUpdateDoctor---------------------------------------------------

export const doctorSchema = yup.object().shape({
    registrationNumber: yup
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
        .required("Field Required!"),
        ward_No: yup
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
        email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!"),
         ward_No: yup
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
        .required("Field Required!"),
        contact: yup
        .string()
        .required("Field Required!")
    
});