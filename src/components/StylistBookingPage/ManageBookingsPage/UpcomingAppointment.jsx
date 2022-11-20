import React from "react";
import {
  BookingServiceCard,
} from "../../../components";
import { IoCalendarSharp } from "react-icons/io5";
import "./ManageBookings.scss";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { bookings } from "../CreateAppointmentData";

export default function UpcomingAppointment({ activeTab, open }) {
  return (
    <ErrorBoundary>
      <>
        {bookings.length > 0 ? (
          <div className={`mappedTabs ${activeTab === 1 ? "activeTab" : ""}`}>
            {bookings.map((item, id) => {
              return <BookingServiceCard item={item} key={id} />;
            })}
          </div>
        ) : (
          <div
            className={`noPastBooking ${activeTab === 1 ? "activeTab" : ""}`}
            onClick={open}
          >
            <div className="calendarIcon">
              <IoCalendarSharp size={40} />
            </div>
            <p className="noBookingText">You have no upbookings.</p>
          </div>
        )}
      </>
    </ErrorBoundary>
  );
}
