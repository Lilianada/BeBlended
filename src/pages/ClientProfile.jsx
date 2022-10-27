import React from "react";
import {
  ClientSecHeader,
  ProfileId,
  AboutFilled,
  Footer,
  BottomNavClient,
  AddOnFilled,
  Gallery,
  ServiceFilled,
  Reviewed,
  LocationFilled,
  ReviewFilled,
  PriceBar,
} from "../components";
import MobilePriceBar from "../components/ClientProfilePage/PriceBar/MobilePriceBar";

function ClientProfile() {
  return (
    <main className="mainWrapper">
      <ClientSecHeader />
      <ProfileId />
      <Gallery />
      <AboutFilled />
      <ServiceFilled />
      <AddOnFilled />
      {/* <Reviewed/> */}
      <PriceBar />
      <ReviewFilled/>
      <LocationFilled />
      <MobilePriceBar />
      <div className="stylistProfile_Footer">
        <Footer />
      </div>
      <BottomNavClient />
    </main>
  );
}

export default ClientProfile;
