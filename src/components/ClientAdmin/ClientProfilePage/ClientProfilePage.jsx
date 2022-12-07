import React from "react";
import { GrPrevious } from "react-icons/gr";
import {
  ClientAdminHeader,
  BottomNavClient,
  WelcomeClient,
  AboutClientSection,
} from "../../../components";
import "./ClientProfilePage.scss";

export default function ClientProfilePage() {
  return (
    <main className="mainWrapper clientProfile_Page">
      <ClientAdminHeader />

      <section className="clientProfile_Section">
        <div className="backBtn">
          <GrPrevious style={{ marginRight: ".35rem" }} stroke-opacity={0.5} />
          <p>Back</p>
        </div>

        <div className="clientProfile_Grid">
          <div className="gridItem">
            <WelcomeClient />
            <AboutClientSection />
          </div>
          <div className="gridItem"></div>
        </div>
      </section>

      <BottomNavClient />
    </main>
  );
}
