import React from "react";
import {
  ErrorBoundary,
  BookingsCard,
} from "../../../../components";
import { IoCalendarSharp } from "react-icons/io5";
import { bookings } from "../../ClientAdminData";
import "../ClientBookingPage/ClientBookingPage.scss";

export default function ClientUpcomingBookings({activeTab, open}) {
  <ErrorBoundary>
  <>
    {bookings.length > 0 ? (
      <div className={`mappedTabs ${activeTab === 1 ? "activeTab" : ""}`}>
        {bookings.map((item, id) => {
          return <BookingsCard item={item} key={id} />;
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
        <p className="noBookingText">You have no upcoming bookings.</p>
        <div className="btn-primary">Browse BeBlended</div>
      </div>
    )}
  </>
</ErrorBoundary>
}
