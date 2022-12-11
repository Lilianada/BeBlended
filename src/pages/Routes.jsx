import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import {
  AdminClientList,
  BookingPage,
  BusinessHour,
  BusinessModal,
  BusinessPage,
  Client,
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
  PayoutInfo,
  PersonalInfo,
  StepFiveClient,
  StepFourClient,
  StepOneClient,
  StepThreeClient,
  StepTwoClient,
  StepTwoStylist,
  Stylist,
  StylistConfirmationAdvanced,
  StylistFinancePage,
} from "../components";
import ReschedulePage from "../components/ClientBookingPage/ReschedulePage/ReschedulePage";

function RoutedPages() {
  return (
    <Routes>
      {/* The nested route names need to be changed */}
        <Route path="/" element={<App />} >
          <Route path="*" element={<ErrorPage />} />
          <Route index path='/home' element={<Home />} />
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

        <Route path="/onboard-client" element={<OnboardClient />} >
          <Route path="/onboard-client/client-step-One" element={<StepOneClient />} />
          <Route path="/onboard-client/client-step-Two" element={<StepTwoClient />} />
          <Route path="/onboard-client/client-step-Three" element={<StepThreeClient />} />
          <Route path="/onboard-client/client-step-Four" element={<StepFourClient />} />
          <Route path="/onboard-client/welcome" element={<StepFiveClient />} />
          <Route path="/onboard-client/logged-in-client" element={<Client />} />
        </Route>

        <Route>
          {/* Stylist Booking */}
          <Route index path="/stylist-booking-page" element={<BookingPage/>} />
          <Route path="/reschedule-appointment" element={<ReschedulePage/>} />
          <Route path="/manage-bookings" element={<ManageBookings/>} />
        </Route>

      <Route>
      {/* Stylist Admin */}
        <Route path="/personal-information" element={<PersonalInfo/>} />
        <Route path="/stylist-finances" element={<StylistFinancePage/>} />
        <Route path="/clients-list" element={<AdminClientList/>} />
        <Route path="/payout-info" element={<PayoutInfo/>} />
      </Route>
    </Routes>
  );
}

export default RoutedPages;
