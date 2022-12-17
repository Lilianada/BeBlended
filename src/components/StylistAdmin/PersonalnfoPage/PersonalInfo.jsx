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
  const [isEditing, setEdit] = useState(1);
  const handleEdit = (index) => {
    setEdit(index);
  };

  const [openModal, setOpenModal] = useState({
    govId: false,
    stylistLicence: false,
  });

  const handleModal = (govId, stylistLicence) => {
    setOpenModal((prev) => {
      return {
        ...prev,
        [govId]: !prev[govId],
        [stylistLicence]: !prev[stylistLicence],
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
            <div className="formWrap">
              <label htmlFor="First-Name" className="inputWrap">
                <p>First name*</p>
                <button
                  className={`editBtn ${!isEditing === 1 ? "edit" : "editBtn"}`}
                  onClick={() => handleEdit(1)}
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} />
            </div>

            <div className="formWrap">
              <label htmlFor="Last-Name" className="inputWrap">
                <p>Last name*</p>
                <button
                  className={`editBtn ${!isEditing === 2 ? "edit" : "editBtn"}`}
                  onClick={() => handleEdit(2)}
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} />
            </div>

            <div className="formWrap">
              <label htmlFor="Email" className="inputWrap">
                <p>Email address*</p>
                <button
                  className={`editBtn ${!isEditing === 3 ? "edit" : "editBtn"}`}
                  onClick={() => handleEdit(3)}
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} />
            </div>

            <div className="formWrap">
              <label htmlFor="Government-id" className="inputWrap">
                <p>Government ID*</p>
                <div className="updateBtn" onClick={() => handleModal("govId")}>
                  Update
                </div>
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
                <div
                  className="updateBtn"
                  onClick={() => handleModal("stylistLicence")}
                >
                  Add
                </div>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {openModal.stylistLicence && (
                    <HairstylistLicenseModal
                      openModal={openModal.stylistLicence}
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

            <button className="saveBtn">Save Changes</button>
          </form>
        </div>
      </div>

      <BottomNavStylist />
    </main>
  );
}
