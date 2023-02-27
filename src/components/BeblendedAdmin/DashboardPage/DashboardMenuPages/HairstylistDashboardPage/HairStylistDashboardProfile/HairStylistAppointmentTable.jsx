import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import {
  PastAppointmentModal,
  UpcomingAppointmentModal,
} from "../../../../../../components";
import "./HairStylistDashboardProfile.scss";

export default function HairStylistAppointmentTable({ data }) {
  const [openModal, setOpenModal] = useState({
    upcoming: false,
    past: false,
  });

  const handleModal = (upcoming, past) => {
    setOpenModal((state) => {
      return {
        ...state,
        [upcoming]: !state[upcoming],
        [past]: !state[past],
      };
    });
  };
  return (
    <div className="appointmentTable">
      <div className="tableHead">
        <p>Date</p>
        <p>Service</p>
        <p>Invoice ID</p>
        <p>Amount</p>
        <p>Status</p>
      </div>
      <div className="tableItem">
        {data.map((data) => {
          return (
            <div key={data.id} className="tableRow">
              <p className="tableData">{data.date}</p>
              <p className="tableData">{data.service}</p>
              <p className="tableData" onClick={() => handleModal("upcoming")}>
                {data.id}
              </p>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {openModal.upcoming && (
                  <UpcomingAppointmentModal
                    openModal={openModal.upcoming}
                    closeModal={setOpenModal}
                  />
                )}
              </AnimatePresence>
              <p className="tableData">${data.amount}</p>
              {data.status === "Completed" ? (
                <>
                  <p
                    className="completedStatus"
                    onClick={() => handleModal("past")}
                  >
                    <BsCheckCircleFill size={14} />
                    {data.status}
                  </p>
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    {openModal.past && (
                      <PastAppointmentModal
                        openModal={openModal.past}
                        closeModal={setOpenModal}
                      />
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <p className="cancelledStatus">
                  <MdCancel size={18} />
                  {data.status}
                </p>
              )}
              <p className="tableData">
                <HiDownload size={14} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
