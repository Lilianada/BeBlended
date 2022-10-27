import React from "react";
import Logo from "../../../assets/logo-black.svg";

const styles = {
    header: {
        padding: "1rem",
        display: "grid",
        placeItems: "center",
        background: "#FCFCFC",
        border: "1px solid #EAEAEA",
    }
};

function BookingHeader() {
  return (
    <header style={styles.header}>
        <img src={Logo} alt="Logo" />
    </header>
  );
}

export default BookingHeader;
