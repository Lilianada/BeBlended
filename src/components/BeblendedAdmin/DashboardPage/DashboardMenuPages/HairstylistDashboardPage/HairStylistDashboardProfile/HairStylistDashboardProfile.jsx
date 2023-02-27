import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { HairStylistAppointmentTable, SuspensionModal, DeactivtionModal } from "../../../../../../components";
import { hairstylistAppointmentTable } from "../../DashboardData";
import "./HairStylistDashboardProfile.scss";

export default function HairStylistDashboardProfile() {
  const [openModal, setOpenModal] = useState({
    suspend: false,
    deactivate: false,
  });

  const handleOpen = (suspend, deactivate) => {
    setOpenModal((state) => {
      return {
        ...state,
        [suspend]: !state[suspend],
        [deactivate]: !state[deactivate],
      };
    });
  };
  return (
    <main className="hairStylistDashboardProfile">
      <div className="dashboardProfile_Head">
        <GrPrevious
          style={{ marginRight: ".35rem" }}
          fill="#707070"
          strokeOpacity={0.5}
        />{" "}
        <p>Back</p>
      </div>

      <div className="profileContainer">
        <div className="profileContainer_Head">
          <h4 className="headText">Braids by Becky</h4>
          <p className="profileActive">Active</p>
          {/* <p className="profileDeactivate">Deactivate</p>
          <p className="profileSuspended">Suspended</p> */}
        </div>
        <div className="profileContainer_Details">
          <div className="textFlex">
            <p className="boldText">Full name: </p>
            <p className="normalText">Becky Jones</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Member Since: </p>
            <p className="normalText">June 2022</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Business Name: </p>
            <p className="normalText">Braids by Becky</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Clientele Size: </p>
            <p className="normalText">20</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Email Address: </p>
            <p className="normalText">braidsbybecky@gmail.com</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Earnings to Date: </p>
            <p className="normalText">$11,200.56</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Business Address: </p>
            <p className="normalText">8000 Wallaby Way, Sydney, Australia</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Total # Bookings: </p>
            <p className="normalText">120 / 123</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Phone Number: </p>
            <p className="normalText">(416) 355 1220</p>
          </div>
          <div className="textFlex">
            <p className="boldText"> </p>
            <p className="normalText"></p>
          </div>
        </div>

        <div className="hairstylistAppointmentTable">
          <h5 className="sectionHead">Appointments</h5>
          <HairStylistAppointmentTable data={hairstylistAppointmentTable} />
          <div className="buttonsWrap">
            <button
              className="suspendBtn"
              onClick={() => handleOpen("suspend")}
            >
              Suspend Account
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.suspend && (
                <SuspensionModal
                  openModal={openModal.suspend}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
            <button
              className="deactivateBtn"
              onClick={() => handleOpen("deactivate")}
            >
              Deactivate Account
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.deactivate && (
                <DeactivtionModal
                  openModal={openModal.deactivate}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
