import React from "react";
import { GrPrevious } from "react-icons/gr";
import {
  ClientAdminHeader,
  BottomNavClient,
  WelcomeClient,
  AboutClientSection,
  ReviewsOfClient,
} from "../../../components";
import "./ClientProfilePage.scss";

export default function ClientProfilePage() {
  return (
    <main className="mainWrapper clientProfile_Page">
      <ClientAdminHeader />

      <section className="clientProfile_Section">
        <button className="backBtn">
          <GrPrevious style={{ marginRight: ".35rem" }} stroke-opacity={0.5} />
          <p>Back</p>
        </button>

        <div className="clientProfile_Grid">
          <div className="gridItem">
            <WelcomeClient />
            <AboutClientSection />
          </div>
          <div className="gridItem">
            <ReviewsOfClient />
          </div>
        </div>
      </section>

      <BottomNavClient />
    </main>
  );
}
