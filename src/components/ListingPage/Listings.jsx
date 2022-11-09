import React from "react";
import { ListingData } from "./ListingData";

export default function Listings() {
  return (
      <div className="listings">
            {
                ListingData.map((item, id) => (
                    <div className="listingsWrap">
                        <div className="profileImage">
                            <img src={item.profileImage} alt="Listing Image" />
                        </div>
                        <div className="listingInfo">

                        </div>
                    </div>
                ))
            }

    </div>
  );
}
