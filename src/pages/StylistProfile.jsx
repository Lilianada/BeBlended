import React from "react";
import {
  BottomNavStylist,
  Footer,
  Placeholders,
} from "../components";

function StylistProfile() {
  return (
    <main className="mainWrapper">
      <Placeholders />
      <div className="stylistProfile_Footer">
        <Footer />
      </div>
      <BottomNavStylist />
    </main>

  );
}

export default StylistProfile;
