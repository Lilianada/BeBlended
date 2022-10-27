import React from "react";
import {
  BlogSection,
  Explore,
  Feedback,
  Footer,
  Header,
  Hero,
  Join,
  SupportClient,
  Work,
} from "../components";

function Home() {
  return (
    <main className="mainWrapper">
      <Header />
      <Hero />
      <Work />
      <SupportClient />
      <Explore />
      <Feedback />
      <BlogSection />
      <Join />
      <Footer />
    </main>
  );
}

export default Home;
