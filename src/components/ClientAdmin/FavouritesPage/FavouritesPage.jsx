import React from "react";
import { GrPrevious } from "react-icons/gr";
import { ClientAdminHeader, BottomNavClient } from "../../../components";

export default function FavouritesPage() {
  return (
    <main className="mainWrapper favouritesPage">
        <ClientAdminHeader/>

        <div className="loginSecurity_head">
          <GrPrevious style={{ marginRight: ".5rem" }} />
          <p>Back</p>
        </div> 

        <BottomNavClient/>
    </main>
  );
}
