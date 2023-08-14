import React, { useState } from "react";
import { useFormik } from "formik";
import { orgSchema, orgUpdateSchema } from "../../../helper/validate";
import { registerUser, updateUser } from "../../../helper/helper";
import {
  DeleteButton,
  Modal,
  ModalContent,
  ModalTitle,
  Overlay,
} from "../../../assets/styles/globalStyls";
import { ModalFormContainerNew, PopUpContentHeader, TextInputField, TextInputFieldParts} from "../z-gsStyle";
import { ButtonContainer } from "../../../components/popup/popupStyle";

export default function OrganizationsAddAndUpdate({
  addModal,
  updateModal,
  setAddModal,
  setUpdateModal,
  eventData,
  setEventData,
  setRegisterSuccess,
  setUpdateSuccess,
}) {
  const [errors, setErrors] = useState("");

  let initialValueForAdd = {
    name: "",
    email: "",
    gsDivision: "",
    divisionNumber: "",
    contact: "",
    boardName: "",
    boardAddress: "",
    nic: "",
    boardPhone: "",
    boardEmail: "",
    password: "org123",
    role: "ORG",
  };
  let initialValueForUpdate = {
    name: eventData ? eventData.name : "",
    email: eventData ? eventData.email : "",
    gsDivision: eventData ? eventData.gsDivision : "",
    divisionNumber: eventData ? eventData.divisionNumber : "",
    contact: eventData ? eventData.contact : "",
    boardName: eventData ? eventData.boardName : "",
    boardAddress: eventData ? eventData.boardAddress : "",
    nic: eventData ? eventData.nic : "",
    boardPhone: eventData ? eventData.boardPhone : "",
    boardEmail: eventData ? eventData.boardEmail : "",
    id: eventData ? eventData._id : "",
    role: "ORG",
  };

  const formik = useFormik({
    initialValues: eventData ? initialValueForUpdate : initialValueForAdd,
    validationSchema: addModal ? orgSchema : orgUpdateSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, onSubmitProps) => {
      let promise = addModal
        ? await registerUser(values)
        : await updateUser(values);
      if (promise === "Register Successfully") {
        setRegisterSuccess(true);
        console.log("hutto");
        setAddModal(false);
        setUpdateModal(false);
        setErrors("");
        onSubmitProps.resetForm();
      } else if (promise === "Update Successfully") {
        setUpdateSuccess(true);
        setAddModal(false);
        setUpdateModal(false);
        setErrors("");
        onSubmitProps.resetForm();
      } else {
        setErrors(promise);
      }

      console.log(promise);
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
              // formik.resetForm();
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

            <ModalFormContainerNew>
              <form onSubmit={formik.handleSubmit}>
                <PopUpContentHeader>
                  <div></div>
                  <span>Organization Details</span>
                  <div></div>
                </PopUpContentHeader>
                <TextInputFieldParts>
                  <div>
                    <TextInputField $error={formik.errors.name}>
                      <label>Organization Name</label>
                      <div>
                        <input
                          {...formik.getFieldProps("name")}
                          type="text"
                        />
                        {formik.errors.name && (
                          <p>{formik.errors.name}</p>
                        )}
                      </div>
                    </TextInputField>
                    <TextInputField
                      $error={formik.errors.email || errors.email}
                    >
                      <label>E-mail</label>
                      <div>
                        <input
                          {...formik.getFieldProps("email")}
                          type="text"
                        />
                        {(formik.errors.email && (
                          <p>{formik.errors.email}</p>
                        )) ||
                          (errors.email && <p>{errors.email}</p>)}
                      </div>
                    </TextInputField>
                  </div>
                  <div>
                    <TextInputField $error={formik.errors.gsDivision}>
                      <label>Gramasewa Division*</label>
                      <div>
                        <input
                          {...formik.getFieldProps("gsDivision")}
                          type="text"
                        />
                        {formik.errors.gsDivision && (
                          <p>{formik.errors.gsDivision}</p>
                        )}
                      </div>
                    </TextInputField>
                    <TextInputField $error={formik.errors.divisionNumber}>
                      <label>Division Number*</label>
                      <div>
                        <input
                          {...formik.getFieldProps("divisionNumber")}
                          type="text"
                        />
                        {formik.errors.divisionNumber && (
                          <p>{formik.errors.divisionNumber}</p>
                        )}
                      </div>
                    </TextInputField>
                  </div>
                  <div>
                    <TextInputField
                      $error={formik.errors.contact || errors.contact}
                    >
                      <label>Phone Number*</label>
                      <div>
                        <input
                          {...formik.getFieldProps("contact")}
                          type="text"
                        />
                        {(formik.errors.contact && (
                          <p>{formik.errors.contact}</p>
                        )) ||
                          (errors.contact && <p>{errors.contact}</p>)}
                      </div>
                    </TextInputField>
                  </div>
                </TextInputFieldParts>

                <PopUpContentHeader>
                  <div></div>
                  <span>Board Person Details</span>
                  <div></div>
                </PopUpContentHeader>

                <TextInputFieldParts>
                  <div>
                    <TextInputField $error={formik.errors.boardName}>
                      <label>Name</label>
                      <div>
                        <input
                          {...formik.getFieldProps("boardName")}
                          type="text"
                        />
                        {formik.errors.boardName && (
                          <p>{formik.errors.boardName}</p>
                        )}
                      </div>
                    </TextInputField>
                    <TextInputField $error={formik.errors.boardAddress}>
                      <label>Address</label>
                      <div>
                        <input
                          {...formik.getFieldProps("boardAddress")}
                          type="text"
                        />
                        {formik.errors.boardAddress && (
                          <p>{formik.errors.boardAddress}</p>
                        )}
                      </div>
                    </TextInputField>
                  </div>
                  <div>
                    <TextInputField $error={formik.errors.nic}>
                      <label>NIC Number</label>
                      <div>
                        <input
                          {...formik.getFieldProps("nic")}
                          type="text"
                        />
                        {formik.errors.nic && (
                          <p>{formik.errors.nic}</p>
                        )}
                      </div>
                    </TextInputField>
                    <TextInputField $error={formik.errors.boardPhone}>
                      <label>Phone Number</label>
                      <div>
                        <input
                          {...formik.getFieldProps("boardPhone")}
                          type="text"
                        />
                        {formik.errors.boardPhone && (
                          <p>{formik.errors.boardPhone}</p>
                        )}
                      </div>
                    </TextInputField>
                  </div>
                  <div>
                    <TextInputField $error={formik.errors.boardEmail}>
                      <label>E-mail</label>
                      <div>
                        <input
                          {...formik.getFieldProps("boardEmail")}
                          type="text"
                        />
                        {formik.errors.boardEmail && (
                          <p>{formik.errors.boardEmail}</p>
                        )}
                      </div>
                    </TextInputField>
                  </div>
                </TextInputFieldParts>

                <ButtonContainer>
                  <DeleteButton type="submit">
                    {addModal && "Add"}
                    {updateModal && "Update"}
                  </DeleteButton>
                </ButtonContainer>
              </form>
            </ModalFormContainerNew>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
