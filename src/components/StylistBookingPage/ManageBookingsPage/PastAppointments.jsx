import React from "react";
import { IoCalendarSharp } from "react-icons/io5";
import "./ManageBookings.scss";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { pastServices } from "../CreateAppointmentData";
import {BookingServiceCard} from "../../../components";

export default function PastAppointments({ activeTab, open }) {
  return (
    <ErrorBoundary>
      {pastServices.length > 0 ? (
          <div className={`mappedTabs ${activeTab === 2 ? "activeTab" : ""}`} onClick={open} >
            {pastServices.map((item, id) => {
              return <BookingServiceCard item={item} key={id} />;
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
            <p className="noBookingText"> You have no past <br /> bookings.</p>
          </div>
        )}
    </ErrorBoundary>
  );
}
