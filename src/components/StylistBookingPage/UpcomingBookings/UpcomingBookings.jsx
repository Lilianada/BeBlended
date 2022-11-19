import React from "react";
import "./UpcomingBookings.scss";
import { Link } from "react-router-dom";
import BookingServiceCard from './BookingServiceCard';

export default function UpcomingBookings() {
  
  return (
    <div className="upcomingBookings">
      <div className="upcomingHeader">
        <h5 className="upcomingHead">Upcoming Bookings</h5>
        <Link to="/manage-bookings" className="subHead">
          View all
        </Link>
      </div>
      <div className="mappedServices">
        <BookingServiceCard/>
      </div>
    </div>
  );
}