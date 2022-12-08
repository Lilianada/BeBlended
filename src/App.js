import "./index.scss";
import 'react-calendar/dist/Calendar.css';
import {
  Home,
  Client,
  OnboardingPages,
  Stylist,
  ClientProfile,
  StylistProfile,
  StylistAdminHome,
  PersonalInfo,
  AppointmentDetails, 
  LoginSecurity, 
  ManageBookings, 
  Placeholders,
  PayoutInfo,
  AdminClientList,
  AdminClientProfile,
  AdminFinancePage,
  ClientAdminHome,
  FavouritesPage,
  ClientPersonalInfo,
  ClientLoginSecurity,
  ClientPayoutInformation,
  ClientBookingPage,
  ClientProfilePage,
  ClientReviewModal,
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
      {/* <AdminClientList /> */}
      {/* <AdminClientProfile/> */}
      {/* <AdminFinancePage /> */}

      {/* <ClientAdminHome /> */}
      {/* <FavouritesPage /> */}
      {/* <ClientPersonalInfo/> */}
      {/* <ClientLoginSecurity /> */}
      {/* <ClientPayoutInformation/> */}
      {/* <ClientBookingPage/> */}
      {/* <ClientProfilePage/> */}
      <ClientReviewModal/>
    </div>
  );
}

export default App;
