import React from "react";
import { ClientAdminHeader, BottomNavClient } from "../../../components";
import "./ClientProfilePage.scss";

export default function ClientProfilePage() {
  return (
    <main className="mainWrapper clientProfile_Page">
      <ClientAdminHeader />

      <section className="clientProfile_Section">
        <div className="backBtn">
            <GrPrevious style={{ marginRight: ".35rem" }} fill="#707070" stroke-opacity={0.5}/>
            <p>Back</p>
        </div>

        <div className="clientProfile_Grid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </div>
      </section>

      <BottomNavClient />
    </main>
  );
}
