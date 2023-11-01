import React, { useState } from "react";
import { useFormik } from "formik";
import { fammilySchema } from "../../../helper/validate";
import { addFammily } from "../../../helper/helper";
import {
    AddButton,
    ButtonContainer,
    FormTextInputBlock,
    MainContainer,
    Modal,
    ModalContent,
    ModalFormContainer,
    ModalTitle,
    Overlay,
    RowContainer,
} from "../../../assets/styles/globalStyls";
import {
    AddAndUndu,
    FormTextInput2,
    Grid40x60,
    InputScrollContainer,
    MainContainerBG2,
    RadioButtonContainer,
    SpaceDiv,
} from "../z-gsStyle";

export default function VillagesAddAndUpdate({
    addModal,
    updateModal,
    setAddModal,
    setUpdateModal,
    eventData,
    setEventData,
    setRegisterSuccess,
    setUpdateSuccess,
    setLoading,
    userData
}) {
    const [errors, setErrors] = useState("");
    const [memberCount, setMemberCount] = useState(1);

    let initialValueForAdd = {
        address: "",
        gsDivision: userData.gsDivision,
        divisionNumber: userData.divisionNumber,
        houseHoldNo: "",
        members: [
            {
                name: "",
                nic: "",
                contact: "",
                age: "",
                gender: "",
            },
            {
                name: "",
                nic: "",
                contact: "",
                age: "",
                gender: "",
            },
        ],
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
        validationSchema: addModal ? fammilySchema : "",
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, onSubmitProps) => {
            if (values.members.length > memberCount + 1) {
                while (values.members.length !== memberCount + 1) {
                    values.members.pop();
                }
            }
            setLoading(true);
            let promise = addModal ? await addFammily(values) : "";
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
            setLoading(false);
        },
    });

    const getMemberContent = () => {
        let content = [];
        for (let i = 1; i < memberCount + 1; i++) {
            content.push(
                <React.Fragment key={i}>
                    <MainContainerBG2>
                        <RowContainer>
                            <FormTextInput2
                                $error={
                                    formik.errors.members &&
                                    formik.errors.members[i]
                                        ? formik.errors.members[i].name
                                        : ""
                                }
                            >
                                <label>Name*</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${i}].name`
                                        )}
                                        type="text"
                                    />
                                    {formik.errors.members &&
                                        formik.errors.members[i] && (
                                            <p>
                                                {formik.errors.members[i].name}
                                            </p>
                                        )}
                                </div>
                            </FormTextInput2>
                            <FormTextInput2
                                $error={
                                    formik.errors.members &&
                                    formik.errors.members[i]
                                        ? formik.errors.members[i].nic
                                        : ""
                                }
                            >
                                <label>NIC</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${i}].nic`
                                        )}
                                        type="text"
                                    />
                                    {formik.errors.members &&
                                        formik.errors.members[i] && (
                                            <p>
                                                {formik.errors.members[i].nic}
                                            </p>
                                        )}
                                </div>
                            </FormTextInput2>
                        </RowContainer>
                        <RowContainer>
                            <FormTextInput2
                                $error={
                                    formik.errors.members &&
                                    formik.errors.members[i]
                                        ? formik.errors.members[i].age
                                        : ""
                                }
                            >
                                <label>Age*</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${i}].age`
                                        )}
                                        type="text"
                                    />
                                    {formik.errors.members &&
                                        formik.errors.members[i] && (
                                            <p>
                                                {formik.errors.members[i].age}
                                            </p>
                                        )}
                                </div>
                            </FormTextInput2>
                            <FormTextInput2
                                $error={
                                    formik.errors.members &&
                                    formik.errors.members[i]
                                        ? formik.errors.members[i].contact
                                        : ""
                                }
                            >
                                <label>Contact</label>
                                <div>
                                    <input
                                        {...formik.getFieldProps(
                                            `members[${i}].contact`
                                        )}
                                        type="text"
                                    />
                                    {formik.errors.members &&
                                        formik.errors.members[i] && (
                                            <p>
                                                {
                                                    formik.errors.members[i]
                                                        .contact
                                                }
                                            </p>
                                        )}
                                </div>
                            </FormTextInput2>
                        </RowContainer>
                        <RowContainer>
                            <FormTextInput2>
                                <label>Gender*</label>
                                <RadioButtonContainer>
                                    <input
                                        type="radio"
                                        name="male"
                                        value="male"
                                        {...formik.getFieldProps(
                                            `members[${i}].gender`
                                        )}
                                    />
                                    <label>Male</label>
                                    <input
                                        type="radio"
                                        name="female"
                                        value="female"
                                        {...formik.getFieldProps(
                                            `members[${i}].gender`
                                        )}
                                    />
                                    <label>Femail</label>
                                </RadioButtonContainer>
                            </FormTextInput2>
                            <AddAndUndu>
                                {i === memberCount && i !== 1 && (
                                    <i
                                        className="fa-solid fa-circle-minus"
                                        style={{ color: "#e74646" }}
                                        onClick={() => {
                                            setMemberCount(memberCount - 1);
                                        }}
                                    ></i>
                                )}
                                {i === memberCount && (
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
                </React.Fragment>
            );
        }
        return content;
    };

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
                                    setMemberCount(1);
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
                                        <FormTextInputBlock
                                            $error={
                                                formik.errors.members &&
                                                formik.errors.members[0]
                                                    ? formik.errors.members[0]
                                                          .name
                                                    : ""
                                            }
                                        >
                                            <label>House Holder Name*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].name"
                                                    )}
                                                    type="text"
                                                />
                                                {formik.errors.members &&
                                                    formik.errors
                                                        .members[0] && (
                                                        <p>
                                                            {
                                                                formik.errors
                                                                    .members[0]
                                                                    .name
                                                            }
                                                        </p>
                                                    )}
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock
                                            $error={
                                                formik.errors.members &&
                                                formik.errors.members[0]
                                                    ? formik.errors.members[0]
                                                          .age
                                                    : ""
                                            }
                                        >
                                            <label>House Holder Age*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].age"
                                                    )}
                                                    type="text"
                                                />
                                                {formik.errors.members &&
                                                    formik.errors
                                                        .members[0] && (
                                                        <p>
                                                            {
                                                                formik.errors
                                                                    .members[0]
                                                                    .age
                                                            }
                                                        </p>
                                                    )}
                                            </div>
                                        </FormTextInputBlock>
                                        <FormTextInputBlock
                                            $error={
                                                formik.errors.members &&
                                                formik.errors.members[0]
                                                    ? formik.errors.members[0]
                                                          .contact
                                                    : ""
                                            }
                                        >
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
                                                {formik.errors.members &&
                                                    formik.errors
                                                        .members[0] && (
                                                        <p>
                                                            {
                                                                formik.errors
                                                                    .members[0]
                                                                    .contact
                                                            }
                                                        </p>
                                                    )}
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
                                        <FormTextInputBlock
                                            $error={
                                                formik.errors.members &&
                                                formik.errors.members[0]
                                                    ? formik.errors.members[0]
                                                          .nic
                                                    : ""
                                            }
                                        >
                                            <label>House Hold NIC*</label>
                                            <div>
                                                <input
                                                    {...formik.getFieldProps(
                                                        "members[0].nic"
                                                    )}
                                                    type="text"
                                                />
                                                {formik.errors.members &&
                                                    formik.errors
                                                        .members[0] && (
                                                        <p>
                                                            {
                                                                formik.errors
                                                                    .members[0]
                                                                    .nic
                                                            }
                                                        </p>
                                                    )}
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
