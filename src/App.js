import BookingPage from "./components/StylistBookingPage/BookingPage/BookingPage";
import "./index.scss";
import 'react-calendar/dist/Calendar.css';
import ManageBookings from "./components/StylistBookingPage/ManageBookingsPage/ManageBookings";
import InfoForm from "./components/StylistBookingPage/Modals/CreateAppointmentModals/ClientInfoForm/InfoForm";
import AppointmentStepOne from "./components/StylistBookingPage/Modals/CreateAppointmentModals/AppointementStepOne/AppointmentStepOne";
import CustomService from "./components/StylistBookingPage/Modals/CreateAppointmentModals/CustomService/CustomService";
import AppointmentConfirmation from "./components/StylistBookingPage/Modals/CreateAppointmentModals/AppointmentConfirmation/AppointmentConfirmation";
// import {
//   Home,
//   Client,
//   ClientProfile,
//   OnboardingPages,
//   Stylist,
//   StylistProfile,
// } from "./components";
// import StepOne from "./components/ClientBookingPage/StepOneBooking/StepOne";
// import PayPage from "./components/ClientBookingPage/Pay/PayPage";
// import ConfirmPage from "./components/ClientBookingPage/ConfirmPage/ConfirmPage";
// import Cancellation from "./components/ClientBookingPage/CancellationPage/Cancellation";
// import TimeScheduler from "./components/ClientBookingPage/TimeScheduler/TimeScheduler";
// import ReschedulePage from "./components/ClientBookingPage/ReschedulePage/ReschedulePage";
// import StepTwo from "./components/ClientBookingPage/StepTwoBooking/StepTwo";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Client /> */}
      {/* <Stylist /> */}
      {/* <OnboardingPages/> */}
      {/* <StylistProfile/> */}
      {/* <ClientProfile /> */}

      {/* <StepOne/> */}
      {/* <StepTwo/> */}
      {/* <PayPage/> */}
      {/* <ConfirmPage/> */}
      {/* <Cancellation/> */}
      {/* <ReschedulePage/> */}
      {/* <TimeScheduler/> */}

    {/* <BookingPage/> */}
    {/* <ManageBookings/> */}
    {/* <InfoForm/> */}
    {/* <CustomService/> */}
    <AppointmentConfirmation/>
    {/* <AppointmentStepOne/> */}
    </div>
  );
}

export default App;
