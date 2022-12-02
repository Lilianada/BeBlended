import React from "react";
import { GrPrevious } from "react-icons/gr";
import { ClientAdminHeader, BottomNavClient } from "../../../components";
import './FavouritesPage.scss';

export default function FavouritesPage() {
  return (
    <main className="mainWrapper favouritesPage">
        <ClientAdminHeader/>

        <div className="w_80">
            <div className="favourites_head">
                <GrPrevious style={{ marginRight: ".5rem" }} />
                <p>Back</p>
            </div> 
            <div className="favourites_subhead">
                <h4 className="formHead">Favourite Stylists</h4>
            </div>
        </div>


        <BottomNavClient/>
    </main>
  );
}
