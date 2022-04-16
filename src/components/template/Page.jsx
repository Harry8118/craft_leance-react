import React from "react";
import FirstSection from "../organisms/firstsection/FirstSection";
import Header from "../organisms/header/Header";
import SignUpSection from "../organisms/singupsection/SignUpSection";
import SubScriptionSection from "../organisms/subscriptionsection/SubScriptionSection";
import Footer from "../organisms/footer/Footer";

import "./Page.scss";
import CardSection from "../organisms/cardsection/CardSection";
import ServiceCardSection from "../organisms/servicecardsection/ServiceCardSection";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <FirstSection />
        <SubScriptionSection />
        <SignUpSection />
        <ServiceCardSection />
        <CardSection />
      </main>
      <Footer />
    </>
  );
};

export default Page;
