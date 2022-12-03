import React from "react";
import { GrPrevious } from "react-icons/gr";
import { ClientAdminHeader, BottomNavClient, FavouriteCards } from "../../../components";
import BeblendedHead from "../../../../assets/Admin-Icons/Beblended-head.svg";
import './FavouritesPage.scss';

export default function FavouritesPage() {
  return (
    <main className="mainWrapper favouritesPage">
        <ClientAdminHeader/>

        <div className="wd_80">
            <div className="favourites_head">
                <GrPrevious style={{ marginRight: ".5rem" }} />
                <p>Back</p>
            </div> 
            <div className="favourites_subhead">
                <h4 className="subhead_text">Favourite Stylists</h4>
                <p>This is the selection of stylists you like most!</p>
            </div>
        </div>
        <hr />

        <div className="favourites_body">
          {clientList.length === 9 ? (
            <div className="noFavouritesCard">
                <img src={BeblendedHead} alt="No Favourite" className="noFavourite_Img" />
                <p className="noFavourite_Txt">You have no clients in <br/> our system yet!</p>
                <p className="smallNote">Clients get added once you start <br/> booking appointments.</p>
            </div>
          ) : (
              clientList.map((card, id) => {
                  return (
                  <div className="favouritesCards">
                <FavouriteCards
                  favouritesImage={card.favouritesImage}
                  favouritesName={card.favouritesName}
                  key={id}
                  />
              <button className="btn-secondary">View More</button>
                  </div>
              );
            })
          )}
      </div>

        <BottomNavClient/>
    </main>
  );
}
