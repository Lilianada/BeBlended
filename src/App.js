import BookingPage from "./components/StylistBookingPage/BookingPage/BookingPage";
import "./index.scss";
import 'react-calendar/dist/Calendar.css';
// import AppointmentConfirmation from "./components/StylistBookingPage/Modals/CreateAppointmentModals/AppointmentConfirmationModal/AppointmentConfirmation";
// import AppointmentStepOne from "./components/StylistBookingPage/Modals/CreateAppointmentModals/AppointementStepOneModal/CreateAppointment";
import {AppointmentDetails, ManageBookings} from "./components";
import RoutedPages from "./pages/Routes";
import InfoForm from "./components/StylistBookingPage/Modals/CreateAppointmentModals/ClientInfoFormModal/InfoForm";
import CustomService from "./components/StylistBookingPage/Modals/CreateAppointmentModals/CustomServiceModal/CustomService";
import NormalService from "./components/StylistBookingPage/Modals/CreateAppointmentModals/NormalServiceModal/NormalService";
import ListingPage from "./components/ListingPage/ListingPage";

// import {
//   Home,
//   Client,
//   ClientProfile,
//   OnboardingPages,
//   Stylist,
//   StylistProfile,
// } from "./components";


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Client /> */}
      {/* <Stylist /> */}
      

    {/* <BookingPage/> */}
    {/* <ManageBookings/> */}
    {/* <InfoForm/> */}
    {/* <CustomService/> */}
    {/* <AppointmentConfirmation/> */}
    {/* <AppointmentStepOne/> */}
    {/* <AppointmentDetails/> */}
    {/* <NormalService/> */}
    
    <ListingPage/>
    {/* <RoutedPages/> */}
    </div>
  );
}

export default App;
