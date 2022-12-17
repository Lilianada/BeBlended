import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { ClientAppointmentTable, SuspensionModal, DeactivtionModal } from "../../../../../../components";
import { clientAppointmentTable } from "../../DashboardData";
import "../../HairStylistDashboardPage/HairStylistDashboardProfile/HairStylistDashboardProfile.scss";

export default function ClientDashboardProfile() {
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
    <main className="clientDashboardProfile">
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
          <h4 className="headText">Lola Adeyemi</h4>
          <p className="profileActive">Active</p>
          {/* <p className="profileDeactivate">Deactivate</p>
              <p className="profileSuspended">Suspended</p> */}
        </div>
        <div className="profileContainer_Details">
          <div className="textFlex">
            <p className="boldText">Full name: </p>
            <p className="normalText">Lola Adeyemi</p>
          </div>
          <div className="textFlex">
            <p className="boldText">$ Spent to Date: </p>
            <p className="normalText">$290.56</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Email Address: </p>
            <p className="normalText">lolaadey@gmail.com</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Total # Bookings: </p>
            <p className="normalText">4</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Phone Number: </p>
            <p className="normalText">(647) 355 1220</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Hair Structure: </p>
            <p className="normalText">Coarse</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Member Since: </p>
            <p className="normalText">June 2022</p>
          </div>
          <div className="textFlex">
            <p className="boldText">Hair Texture: </p>
            <p className="normalText">Kinky</p>
          </div>
        </div>

        <div className="clientAppointmentTable">
          <h5 className="sectionHead">Appointments</h5>
          <ClientAppointmentTable data={clientAppointmentTable} />
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
