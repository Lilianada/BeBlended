import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import {
  BookingPage,
  BusinessHour,
  BusinessModal,
  BusinessPage,
  CompletedStylist,
  ErrorPage,
  Home,
  IdUpload,
  LicenseQtn,
  LicenseUpload,
  ManageBookings,
  OnboardClient,
  OnboardingStylistIntro,
  OnboardStylistForm,
  StepFiveClient,
  StepFourClient,
  StepOneClient,
  StepThreeClient,
  StepTwoClient,
  StepTwoStylist,
  StylistConfirmationAdvanced,
  StylistConfirmationMajor,
} from "../components";
import Cancellation from "../components/ClientBookingPage/CancellationPage/Cancellation";
import ReschedulePage from "../components/ClientBookingPage/ReschedulePage/ReschedulePage";
import Client from "./Client";
import Stylist from "./Stylist";

function RoutedPages() {
  return (
    <React.Fragment>
      {/* The nested route names need to be changed */}
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route index path='.home' element={<Home />} />
          <Route  element={<OnboardingStylistIntro />} />
          <Route path="/stylist-step-one" element={<StepTwoStylist />} />
          <Route path="/stylist-step-two" element={<StylistConfirmationAdvanced />} />
          <Route path="/stylist-step-three" element={<OnboardStylistForm />} />
          <Route path="/stylist-step-four" element={<BusinessPage />} />
          <Route path="/stylist-step-five" element={<BusinessHour />} />
          <Route path="/stylist-step-six" element={<BusinessModal />} />
          <Route path="/stylist-step-seven" element={<IdUpload />} />
          <Route path="/stylist-step-eight" element={<LicenseQtn />} />
          <Route path="/stylist-step-nine" element={<LicenseUpload />} />
          <Route path="/stylist-completed" element={<CompletedStylist />} />
          <Route path="/logged-in-stylist" element={<Stylist />} />
        </Route>

      <Route>
        <Route index path="/onboard-client" element={<OnboardClient />} />
        <Route path="/client-step-One" element={<StepOneClient />} />
        <Route path="/client-step-Two" element={<StepTwoClient />} />
        <Route path="/client-step-Three" element={<StepThreeClient />} />
        <Route path="/client-step-Four" element={<StepFourClient />} />
        <Route path="/welcome" element={<StepFiveClient />} />
        <Route path="/logged-in-client" element={<Client />} />
      </Route>

      <Route>
        <Route index path="/stylist-booking-page" element={<BookingPage/>} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/reschedule-appointment" element={<ReschedulePage/>} />
        <Route path="manage-bookings" element={<ManageBookings/>} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>

    </React.Fragment>
  );
}

export default RoutedPages;
