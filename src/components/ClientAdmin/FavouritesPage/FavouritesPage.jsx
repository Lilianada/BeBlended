import React from "react";
import { GrPrevious } from "react-icons/gr";
import {
  ClientAdminHeader,
  BottomNavClient,
  FavouriteCards,
} from "../../../components";
import BeblendedHead from "../../../assets/Admin-Icons/Beblended-head.svg";
import { favouriteList } from "../ClientAdminData";
import "./FavouritesPage.scss";

export default function FavouritesPage() {
  return (
    <main className="mainWrapper favouritesPage">
      <ClientAdminHeader />

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
        {favouriteList.length < 9 ? (
          <div className="noFavourites_Card">
            <img
              src={BeblendedHead}
              alt="No Favourite"
              className="noFavourite_Img"
            />
            <p className="noFavourite_Txt">
              You haven’t favourited any
              <br /> stylists yet!
            </p>
            <p className="smallNote">
              Click the 🖤 on a stylist’s profile to
              <br /> add them to this list
            </p>
          </div>
        ) : (
          favouriteList.map((card, id) => {
            return (
              <div className="favouriteCards">
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

      <BottomNavClient />
    </main>
  );
}
