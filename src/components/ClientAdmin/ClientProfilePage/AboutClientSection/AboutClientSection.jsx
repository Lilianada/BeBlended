import React from "react";

export default function AboutClientSection() {
  return (
    <section className="aboutClient_Section">
        <div className="aboutHead">About</div>
        <div className="address">
            <AiFillHome style={{marginRight: ".5rem"}} />
            <p>Lives in Toronto, Canada</p>
            <FaPen style={{marginLeft: ".5rem"}} />
        </div>
    </section>
  );
}
