import React, { useState } from 'react'
import { useFormik } from "formik";
import { doctorSchema, doctorUpdateSchema } from "../../../helper/validate";
import { registerUser, updateUser } from "../../../helper/helper";
import { AddButton, ButtonContainer, FormTextInput, Modal, ModalContent, ModalFormContainer, ModalTitle, Overlay } from '../../../assets/styles/globalStyls';

export default function DoctorAddAndUpdate({ addModal, updateModal, setAddModal, setUpdateModal, eventData, setEventData, setRegisterSuccess, setUpdateSuccess }) {

    const [errors, setErrors] = useState("");
    
    let initialValueForAdd = {
        registrationNumber: "",
        name: "",
        email: "",
        contact: "",
        ward_No: "",
        role: "DR",
    };
    let initialValueForUpdate = {
        registrationNumber: eventData ? eventData.registration_Number : "",
        name: eventData ? eventData.name : "",
        nic: eventData ? eventData.nic : "",
        email: eventData ? eventData.email : "",
        contact: eventData ? eventData.contact : "",
        ward_No: eventData ? eventData.ward_No : "",
        role: "DR",
    };

    const formik = useFormik({
        initialValues: eventData ? initialValueForUpdate : initialValueForAdd,
        validationSchema: addModal
            ? doctorSchema
            : doctorUpdateSchema,
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, onSubmitProps) => {
            // let promise = addModal
            //     ? await registerUser(values)
            //     : await updateUser(values);
            // if (promise === "Register Successfully") {
            //     setAddModal(false);
            //     setUpdateModal(false);
            //     setErrors("");
            //     onSubmitProps.resetForm();
            //     setRegisterSuccess(true);
            // } else if (promise === "Update Successfully") {
            //     setAddModal(false);
            //     setUpdateModal(false);
            //     setErrors("");
            //     setEventData("");
            //     onSubmitProps.resetForm();
            //     setUpdateSuccess(true);
            // } else {
            //     setErrors(promise);
            // }

            console.log(values);
        },
    });

    return (
        <>
            {(addModal || updateModal) && (
                <Modal>
                    <Overlay
                        onClick={() => {
                            setAddModal(false);
                            setUpdateModal(false);
                            formik.resetForm();
                            setErrors("");
                            setEventData("");
                        }}
                    />
                    <ModalContent>
                        <ModalTitle>
                            {addModal && <div>Add new Doctor</div>}
                            {updateModal && <div>Update Doctor</div>}
                            <i
                                className="fa-solid fa-circle-xmark"
                                onClick={() => {
                                    setAddModal(false);
                                    setUpdateModal(false);
                                    formik.resetForm();
                                    setErrors("");
                                    setEventData("");
                                }}
                            ></i>
                        </ModalTitle>
                        <ModalFormContainer>
                            <form onSubmit={formik.handleSubmit}>

                            <FormTextInput $error={formik.errors.registrationNumber}>
                                    <label>Registration Number*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("registrationNumber")}
                                            type="text"
                                        />
                                        {formik.errors.registrationNumber && (
                                            <p>{formik.errors.registrationNumber}</p>
                                        )}
                                    </div>
                                </FormTextInput>
                                <FormTextInput $error={formik.errors.name}>
                                    <label>Name*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("name")}
                                            type="text"
                                        />
                                        {formik.errors.name && (
                                            <p>{formik.errors.name}</p>
                                        )}
                                    </div>
                                </FormTextInput>
                                <FormTextInput $error={formik.errors.email}>
                                    <label>E-mail*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("email")}
                                            type="text"
                                        />
                                        {formik.errors.email && (
                                            <p>{formik.errors.email}</p>
                                        )}
                                    </div>
                                </FormTextInput>
                                
                                <FormTextInput
                                    $error={
                                        formik.errors.contact || errors.contact
                                    }
                                >
                                    <label>Contact*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("contact")}
                                            type="text"
                                        />
                                        {(formik.errors.contact && (
                                            <p>{formik.errors.contact}</p>
                                        )) ||
                                            (errors.contact && (
                                                <p>{errors.contact}</p>
                                            ))}
                                    </div>
                                </FormTextInput>
                                
                                <FormTextInput
                                    $error={formik.errors.ward_No}
                                >
                                    <label>Ward No*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps(
                                                "ward_No"
                                            )}
                                            type="text"
                                        />
                                        {formik.errors.ward_No && (
                                            <p>{formik.errors.ward_No}</p>
                                        )}
                                    </div>
                                </FormTextInput>
                                

                               
                                

                                <ButtonContainer>
                                    <AddButton type="submit">
                                        {addModal && "Add"}
                                        {updateModal && "Update"}
                                    </AddButton>
                                </ButtonContainer>
                            </form>
                        </ModalFormContainer>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}