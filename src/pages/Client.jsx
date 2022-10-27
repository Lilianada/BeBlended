import React from "react";
import {
  BlogSection,
  BottomNavClient,
  ClientHero,
  Feedback,
  Footer,
  SupportClient,
} from "../components";

function Client() {
  return (
    <main className="mainWrapper">
      <ClientHero />
      <SupportClient />
      <Feedback />
      <BlogSection />
      <Footer />
      <BottomNavClient />
    </main>
  );
}

export default Client;
