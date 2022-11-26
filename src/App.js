import BookingPage from "./components/StylistBookingPage/BookingPage/BookingPage";
import "./index.scss";
import 'react-calendar/dist/Calendar.css';
// import AppointmentConfirmation from "./components/StylistBookingPage/Modals/CreateAppointmentModals/AppointmentConfirmationModal/AppointmentConfirmation";
// import AppointmentStepOne from "./components/StylistBookingPage/Modals/CreateAppointmentModals/AppointementStepOneModal/CreateAppointment";
import RoutedPages from "./pages/Routes";
import InfoForm from "./components/StylistBookingPage/Modals/CreateAppointmentModals/ClientInfoFormModal/InfoForm";
import CustomService from "./components/StylistBookingPage/Modals/CreateAppointmentModals/CustomServiceModal/CustomService";
import NormalService from "./components/StylistBookingPage/Modals/CreateAppointmentModals/NormalServiceModal/NormalService";
import ListingPage from "./components/ListingPage/ListingPage";
import PriceRangeModal from "./components/ListingPage/PriceRangeModal/PriceRangeModal";
import DistanceModal from "./components/ListingPage/DistanceModal/DistanceModal";

import {
  ClientProfile,
  // Home,
  // Client,
  // OnboardingPages,
  // Stylist,
  StylistProfile,
  StylistAdminHome,
  PersonalInfo,
  AppointmentDetails, 
  LoginSecurity, 
  ManageBookings, 
  Placeholders,
  PayoutInfo,
  AdminClientList,
} from "./components";


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Client /> */}
      {/* <Stylist /> */}
      
      {/* <Placeholders/> */}
      {/* <ClientProfile/>  */}
      {/* <StylistProfile/> */}
      
    {/* <BookingPage/> */}
    {/* <ManageBookings/> */}
    
    {/* <ListingPage/> */}

    {/* <StylistAdminHome /> */}
    {/* <PersonalInfo /> */}
    {/* <LoginSecurity/> */}
    {/* <PayoutInfo /> */}
    <AdminClientList />
    </div>
  );
}

export default App;
