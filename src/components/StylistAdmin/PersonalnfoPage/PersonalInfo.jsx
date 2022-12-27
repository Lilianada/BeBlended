import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  StylistAdminHeader,
  BottomNavStylist,
  GovernmentIdModal,
  HairstylistLicenseModal,
} from "../../../components";
import "./PersonalInfo.scss";

export default function Personalnfo() {
  const [isEditing, setEdit] = useState(true);
  const handleEdit = () => {
    setEdit(!isEditing);
    console.log("clicked")
  };

  const [openModal, setOpenModal] = useState({
    govId: false,
    stylistLicense: false,
  });
  const handleModal = (govId, stylistLicense) => {
    setOpenModal((prev) => {
      return {
        ...prev,
        [govId]: !prev[govId],
        [stylistLicense]: !prev[stylistLicense],
      };
    });
  };
  
  return (
    <main className="mainWrapper personalInfo_page">
      <StylistAdminHeader />

      <div className="wd_90">
        <div className="backBtn">
          <GrPrevious style={{ marginRight: ".5rem" }} fill="#707070" />
          <p>Back</p>
        </div>

        <div className="wd_90">
          <h6 className="personalInfo_head">
            Account
            <GrNext style={{ margin: " 0 .35rem" }} fill="#707070" />
            Personal Information
          </h6>

          <h4 className="formHead">Personal Information</h4>

          <form action="" className="personalInfo_form">
            {/* Show original info of the client once loaded */}
            <div className="formWrap">
              <label htmlFor="First-Name" className="inputWrap">
                <p>First name*</p>
                <button
                  className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
                  onClick={handleEdit}
                  type="button"
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} value="Lilian" />
            </div>

            <div className="formWrap">
              <label htmlFor="Last-Name" className="inputWrap">
                <p>Last name*</p>
                <button
                  className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
                  onClick={handleEdit}
                  type="button"
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} value="Stark" />
            </div>

            <div className="formWrap">
              <label htmlFor="Email" className="inputWrap">
                <p>Email address*</p>
                <button
                  className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
                  onClick={handleEdit}
                  type="button"
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} value="Lilianstarke@gmail.com" />
            </div>

            <div className="formWrap">
              <label htmlFor="Government-id" className="inputWrap">
                <p>Government ID*</p>
                <button className="updateBtn" onClick={() => handleModal("govId")} type="button" >
                  Update
                </button>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {openModal.govId && (
                    <GovernmentIdModal
                      openModal={openModal.govId}
                      closeModal={setOpenModal}
                    />
                  )}
                </AnimatePresence>
              </label>
              <input
                type="text"
                className="inputField"
                placeholder="Provided"
                disabled={true}
              />
            </div>

            <div className="formWrap">
              <label htmlFor="Name" className="inputWrap">
                <p>Hairstylist License</p>
                <button
                  className="updateBtn"
                  onClick={() => handleModal("stylistLicense")}
                  type="button"
                >
                  Add
                </button>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {openModal.stylistLicense && (
                    <HairstylistLicenseModal
                      openModal={openModal.stylistLicense}
                      closeModal={setOpenModal}
                    />
                  )}
                </AnimatePresence>
              </label>
              <input
                type="text"
                className="inputField"
                placeholder="Not Provided"
                disabled={true}
              />
            </div>

            <button className="saveBtn" type="button">Save Changes</button>
          </form>
        </div>
      </div>

      <BottomNavStylist />
    </main>
  );
}
