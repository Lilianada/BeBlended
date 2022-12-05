import React from "react";
import { IoCalendarSharp } from "react-icons/io5";
import { pastServices } from "../../ClientAdminData";
import { BookingsCard, ErrorBoundary } from "../../../../components";
import "../ClientBookingPage/ClientBookingPage.scss";

export default function PastBookings({ activeTab, open }) {
  return (
    <ErrorBoundary>
      {pastServices.length > 3 ? (
        <div
          className={`mappedTabs ${activeTab === 2 ? "activeTab" : ""}`}
          onClick={open}
        >
          {pastServices.map((item, id) => {
            return <BookingsCard item={item} key={id} />;
          })}
        </div>
      ) : (
        <div
          className={`noPastBooking ${activeTab === 2 ? "activeTab" : ""}`}
          onClick={open}
        >
          <div className="calendarIcon">
            <IoCalendarSharp size={40} />
          </div>
          <p className="noBookingText">
            {" "}
            You have no past <br /> bookings.
          </p>
        </div>
      )}
    </ErrorBoundary>
  );
}
