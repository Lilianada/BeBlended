import React from "react";
import StylistHero from "../components/StylistProps/StylistHero/StylistHero";
import BottomNavStylist from "../components/Sections/BottomNav/BottomNavStylist";
import SupportStylist from "../components/Sections/Support/SupportStylist";
import BlogSection from "../components/Sections/BlogSection/BlogSection";
import Footer from "../components/Sections/Footer/Footer";

function Stylist() {
  return (
    <main className="mainWrapper">
        <StylistHero/>
        <SupportStylist/>
        <BlogSection/>
        <Footer />
        <BottomNavStylist />
    </main>
  );
}

export default Stylist;
