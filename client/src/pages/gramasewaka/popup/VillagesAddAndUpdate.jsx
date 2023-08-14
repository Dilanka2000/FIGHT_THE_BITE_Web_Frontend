import React, { useState } from 'react'
import { useFormik } from "formik";
import {  } from "../../../helper/validate";
import {  } from "../../../helper/helper";
import { AddButton, ButtonContainer, FormTextInputBlock, MainContainer, Modal, ModalContent, ModalFormContainer, ModalTitle, Overlay, RowContainer } from '../../../assets/styles/globalStyls';
import { AddAndUndu, FormTextInput2, Grid40x60, InputScrollContainer, MainContainerBG2, RadioButtonContainer, SpaceDiv } from '../z-gsStyle';

export default function VillagesAddAndUpdate({ addModal, updateModal, setAddModal, setUpdateModal, eventData, setEventData, setRegisterSuccess, setUpdateSuccess }) {

    const [errors, setErrors] = useState("");
    const [memberCount, setMemberCount] = useState(1);
    
    let initialValueForAdd = {
        address : "",
        gsDivision : "Boralesgamuwa",
        divisionNumber : "123AS",
        houseHoldNo : "",
        members: [{
            name: "",
            nic: "",
            contact: "",
            age: "",
            gender: ""
        },
        {
            name: "",
            nic: "",
            contact: "",
            age: "",
            gender: ""
        }],
    };
    let initialValueForUpdate = {
        address: eventData ? eventData.address : "",
        gsDivision: eventData ? eventData.gsDivision : "",
        divisionNumber: eventData ? eventData.divisionNumber : "",
        houseHoldNo: eventData ? eventData.houseHoldNo : "",
        members: eventData ? eventData.members : [],
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

    const getMemberContent = () => {
        let content = [];
        for (let i = 0; i < memberCount; i++) { 
            content.push(
                <>
                    <MainContainerBG2 key={memberCount}>
                        <RowContainer>
                            <FormTextInput2>
                                <label>Name*</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${memberCount}].name`
                                        )}
                                        type="text"
                                    />
                                </div>
                            </FormTextInput2>
                            <FormTextInput2>
                                <label>NIC</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${memberCount}].nic`
                                        )}
                                        type="text"
                                    />
                                </div>
                            </FormTextInput2>
                        </RowContainer>
                        <RowContainer>
                            <FormTextInput2>
                                <label>Age*</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${memberCount}].age`
                                        )}
                                        type="text"
                                    />
                                </div>
                            </FormTextInput2>
                            <FormTextInput2>
                                <label>Contact</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${memberCount}].contact`
                                        )}
                                        type="text"
                                    />
                                </div>
                            </FormTextInput2>
                        </RowContainer>
                        <RowContainer>
                            <FormTextInput2>
                                <label>Gender*</label>
                                <RadioButtonContainer>
                                    <input
                                        type="radio"
                                        name="members[${memberCount}].gender"
                                        value="male"
                                        {...formik.getFieldProps(
                                            `members[${memberCount}].gender`
                                        )}
                                    />
                                    <label>Male</label>
                                    <input
                                        type="radio"
                                        name="members[${memberCount}].gender"
                                        value="female"
                                        {...formik.getFieldProps(
                                            `members[${memberCount}].gender`
                                        )}
                                    />
                                    <label>Femail</label>
                                </RadioButtonContainer>
                            </FormTextInput2>
                            <AddAndUndu>
                                {i === memberCount - 1 && (
                                    <i
                                        className="fa-solid fa-circle-minus"
                                        style={{ color: "#e74646" }}
                                        onClick={() => {
                                            setMemberCount(memberCount - 1);
                                        }}
                                    ></i>
                                )}
                                {i === memberCount - 1 && (
                                    <i
                                        className="fa-solid fa-circle-plus"
                                        style={{ color: "#4cbc9a" }}
                                        onClick={() => {
                                            setMemberCount(memberCount + 1);
                                        }}
                                    ></i>
                                )}
                            </AddAndUndu>
                        </RowContainer>
                    </MainContainerBG2>
                    <SpaceDiv />
                </>
            );
        }
        return content;
    }

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
                            {addModal && <div>Add new fammily</div>}
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
                                <Grid40x60>
                                    <MainContainer>
                                        <FormTextInputBlock>
                                            <label>House Holder Name*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].name"
                                                    )}
                                                    type="text"
                                                />
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock>
                                            <label>House Holder Age*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].age"
                                                    )}
                                                    type="text"
                                                />
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock>
                                            <label>
                                                House Holder Contact Number*
                                            </label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].contact"
                                                    )}
                                                    type="text"
                                                />
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock
                                            $error={formik.errors.houseHoldNo}
                                        >
                                            <label>House Hold Number*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "houseHoldNo"
                                                    )}
                                                    type="text"
                                                />
                                                {formik.errors.houseHoldNo && (
                                                    <p>
                                                        {
                                                            formik.errors
                                                                .houseHoldNo
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock
                                            $error={formik.errors.address}
                                        >
                                            <label>Address*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "address"
                                                    )}
                                                    type="text"
                                                />
                                                {formik.errors.address && (
                                                    <p>
                                                        {formik.errors.address}
                                                    </p>
                                                )}
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock>
                                            <label>House Hold NIC*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].nic"
                                                    )}
                                                    type="text"
                                                />
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock>
                                            <label>Gender*</label>
                                            <RadioButtonContainer>
                                                <input
                                                    type="radio"
                                                    id="male"
                                                    name="members[0].gender"
                                                    value="male"
                                                    {...formik.getFieldProps(
                                                        "members[0].gender"
                                                    )}
                                                />
                                                <label>Male</label>
                                                <input
                                                    type="radio"
                                                    id="female"
                                                    name="members[0].gender"
                                                    value="female"
                                                    {...formik.getFieldProps(
                                                        "members[0].gender"
                                                    )}
                                                />
                                                <label>Femail</label>
                                            </RadioButtonContainer>
                                        </FormTextInputBlock>
                                    </MainContainer>
                                    <MainContainer>
                                        <InputScrollContainer>
                                            {getMemberContent()}
                                        </InputScrollContainer>
                                    </MainContainer>
                                </Grid40x60>

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