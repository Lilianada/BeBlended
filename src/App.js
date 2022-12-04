import "./index.scss";
import 'react-calendar/dist/Calendar.css';
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
  AdminClientProfile,
  AdminFinancePage,
  ClientAdminHome,
  FavouritesPage,
  ClientPersonalInfo,
  ClientLoginSecurity,
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
      <ClientLoginSecurity />
    </div>
  );
}

export default App;
