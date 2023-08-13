import React, { useState } from 'react'
import { useFormik } from "formik";
import {  } from "../../../helper/validate";
import {  } from "../../../helper/helper";
import { AddButton, ButtonContainer, FormTextInput, FormTextInputBlock, Modal, ModalContent, ModalFormContainer, ModalTitle, Overlay } from '../../../assets/styles/globalStyls';

export default function VillagesAddAndUpdate({ addModal, updateModal, setAddModal, setUpdateModal, eventData, setEventData, setRegisterSuccess, setUpdateSuccess }) {

    const [errors, setErrors] = useState("");
    
    let initialValueForAdd = {
        address : "",
        gsDivision : "",
        divisionNumber : "",
        houseHoldNo : "",
        members : "",
    };
    let initialValueForUpdate = {
        address: eventData ? eventData.address : "",
        gsDivision: eventData ? eventData.gsDivision : "",
        divisionNumber: eventData ? eventData.divisionNumber : "",
        houseHoldNo: eventData ? eventData.houseHoldNo : "",
        members: eventData ? eventData.members : "",
        id: eventData ? eventData._id : "",
    };

    const formik = useFormik({
        initialValues: eventData ? initialValueForUpdate : initialValueForAdd,
        // validationSchema: addModal
        //     ? villageOfficerSchema
        //     : villageOfficerUpdateSchema,
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
                                <FormTextInputBlock $error={formik.errors.address}>
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
                                </FormTextInputBlock>
                                <FormTextInputBlock
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
                                </FormTextInputBlock>
                                <FormTextInputBlock
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
                                </FormTextInputBlock>

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