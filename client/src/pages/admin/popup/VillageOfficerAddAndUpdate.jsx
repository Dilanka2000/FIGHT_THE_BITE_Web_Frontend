import React, { useState } from 'react'
import { useFormik } from "formik";
import { villageOfficerSchema, villageOfficerUpdateSchema } from "../../../helper/validate";
import { registerUser, updateUser } from "../../../helper/helper";
import { AddButton, ButtonContainer, FormTextInput, Modal, ModalContent, ModalFormContainer, ModalTitle, Overlay } from '../../../assets/styles/globalStyls';

export default function VillageOfficerAddAndUpdate({ addModal, updateModal, setAddModal, setUpdateModal, eventData, setEventData, setRegisterSuccess, setUpdateSuccess, setLoading }) {

    const [errors, setErrors] = useState("");
    
    let initialValueForAdd = {
        name: "",
        address: "",
        nic: "",
        contact: "",
        email: "",
        gsDivision: "",
        divisionNumber: "",
        password: "As@12345",
        role: "GN",
    };
    let initialValueForUpdate = {
        name: eventData ? eventData.name : "",
        address: eventData ? eventData.address : "",
        nic: eventData ? eventData.nic : "",
        contact: eventData ? eventData.contact : "",
        email: eventData ? eventData.email : "",
        gsDivision: eventData ? eventData.gsDivision : "",
        divisionNumber: eventData ? eventData.divisionNumber : "",
        id: eventData ? eventData._id : "",
        role: "GN",
    };

    const formik = useFormik({
        initialValues: eventData ? initialValueForUpdate : initialValueForAdd,
        validationSchema: addModal
            ? villageOfficerSchema
            : villageOfficerUpdateSchema,
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, onSubmitProps) => {
            setLoading(true);
            let promise = addModal
                ? await registerUser(values)
                : await updateUser(values);
            if (promise === "Register Successfully") {
                setLoading(false);
                setAddModal(false);
                setUpdateModal(false);
                setErrors("");
                onSubmitProps.resetForm();
                setRegisterSuccess(true);
            } else if (promise === "Update Successfully") {
                setLoading(false);
                setAddModal(false);
                setUpdateModal(false);
                setErrors("");
                setEventData("");
                onSubmitProps.resetForm();
                setUpdateSuccess(true);
            } else {
                setLoading(false);
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
                            {addModal && <div>Add new Gramasewaka</div>}
                            {updateModal && <div>Update Gramasewaka</div>}
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
                                <FormTextInput $error={formik.errors.address}>
                                    <label>Address*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("address")}
                                            type="text"
                                        />
                                        {formik.errors.address && (
                                            <p>{formik.errors.address}</p>
                                        )}
                                    </div>
                                </FormTextInput>
                                <FormTextInput
                                    $error={formik.errors.nic || errors.nic}
                                >
                                    <label>NIC Number*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("nic")}
                                            type="text"
                                        />
                                        {(formik.errors.nic && (
                                            <p>{formik.errors.nic}</p>
                                        )) ||
                                            (errors.nic && <p>{errors.nic}</p>)}
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
                                    $error={formik.errors.email || errors.email}
                                >
                                    <label>Email Address*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps("email")}
                                            type="text"
                                        />
                                        {(formik.errors.email && (
                                            <p>{formik.errors.email}</p>
                                        )) ||
                                            (errors.email && (
                                                <p>{errors.email}</p>
                                            ))}
                                    </div>
                                </FormTextInput>
                                <FormTextInput
                                    $error={formik.errors.gsDivision}
                                >
                                    <label>Gramasewa Division*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps(
                                                "gsDivision"
                                            )}
                                            type="text"
                                        />
                                        {formik.errors.gsDivision && (
                                            <p>{formik.errors.gsDivision}</p>
                                        )}
                                    </div>
                                </FormTextInput>
                                <FormTextInput
                                    $error={formik.errors.divisionNumber}
                                >
                                    <label>Division Number*</label>
                                    <div>
                                        <input
                                            {...formik.getFieldProps(
                                                "divisionNumber"
                                            )}
                                            type="text"
                                        />
                                        {formik.errors.divisionNumber && (
                                            <p>
                                                {formik.errors.divisionNumber}
                                            </p>
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