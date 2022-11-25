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
  const [openModal, setOpenModal] = useState({
    govId: false,
    stylistLicence: false,
  });

  const handleModal = (govId, stylistLicence) => {
    setOpenModal(
      ((prev) => {
        return {
          ...prev,
          [govId]: !prev[govId],
          [stylistLicence]: !prev[stylistLicence],
        };
      })
    );
  };
  return (
    <main className="mainWrapper personalInfo_page">
      <StylistAdminHeader />

      <div className="wd_80">
        <div className="personalInfo_head">
          <GrPrevious style={{ marginRight: ".5rem" }} />
          <p>Back</p>
        </div>

        <strong className="personalInfo_subhead">
          Account
          <GrNext style={{ margin: " 0 .5rem" }} />
          Personal Information
        </strong>

        <h4 className="formHead">Personal Information</h4>

        <form action="" className="personalInfo_form">
          <div className="formWrap">
            <label htmlFor="First-Name" className="inputWrap">
              <p>First name*</p>
              <button className="editBtn">Edit</button>
            </label>
            <input type="text" className="inputField" />
          </div>

          <div className="formWrap">
            <label htmlFor="Last-Name" className="inputWrap">
              <p>Last name*</p>
              <button className="editBtn">Edit</button>
            </label>
            <input type="text" className="inputField" />
          </div>

          <div className="formWrap">
            <label htmlFor="Email" className="inputWrap">
              <p>Email address*</p>
              <button className="editBtn">Edit</button>
            </label>
            <input type="text" className="inputField" />
          </div>

          <div className="formWrap">
            <label htmlFor="Government-id" className="inputWrap">
              <p>Government ID*</p>
              <div
                className="updateBtn"
                onClick={() => handleModal("govId")}
              >
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
            <input type="text" className="inputField" placeholder="Provided" />
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
            />
          </div>

          <button className="saveBtn">Save Changes</button>
        </form>
      </div>

      <BottomNavStylist />
    </main>
  );
}
