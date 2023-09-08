import React, { useState } from 'react'
import { useFormik } from "formik";
import { doctorSchema, doctorUpdateSchema } from "../../../helper/validate";
import { registerUser, updateUser } from "../../../helper/helper";
import { AddButton, ButtonContainer, FormTextInput, Modal, ModalContent, ModalFormContainer, ModalTitle, Overlay } from '../../../assets/styles/globalStyls';

export default function DoctorAddAndUpdate({ addModal, updateModal, setAddModal, setUpdateModal, eventData, setEventData, setRegisterSuccess, setUpdateSuccess }) {

    const [errors, setErrors] = useState("");
    
    let initialValueForAdd = {
        registrationNumber: "",
        nic:"",
        name: "",
        email: "",
        contact: "",
        wardNo: "",
        role: "DR",
        password:"As@12345",
    };
    let initialValueForUpdate = {
        registrationNumber: eventData ? eventData.registration_Number : "",
        nic: eventData ? eventData.nic : "",
        name: eventData ? eventData.name : "",
        email: eventData ? eventData.email : "",
        contact: eventData ? eventData.contact : "",
        wardNo: eventData ? eventData.wardNo : "",
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
            let promise = addModal
                ? await registerUser(values)
                : await updateUser(values);
            if (promise === "Register Successfully") {
                setAddModal(false);
                setUpdateModal(false);
                setErrors("");
                onSubmitProps.resetForm();
                setRegisterSuccess(true);
            } else if (promise === "Update Successfully") {
                setAddModal(false);
                setUpdateModal(false);
                setErrors("");
                setEventData("");
                onSubmitProps.resetForm();
                setUpdateSuccess(true);
            } else {
                setErrors(promise);
            }

            console.log(errors);
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
                                <FormTextInput $error={formik.errors.nic}>
                                    <label>NIC*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("nic")}
                                            type="text"
                                        />
                                        {formik.errors.nic && (
                                            <p>{formik.errors.nic}</p>
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
                                    $error={formik.errors.wardNo}
                                >
                                    <label>Ward No*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps(
                                                "wardNo"
                                            )}
                                            type="text"
                                        />
                                        {formik.errors.wardNo && (
                                            <p>{formik.errors.wardNo}</p>
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