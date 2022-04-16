import React from "react";
import FirstSection from "../organism/Firstsection/FirstSection";
import Header from "../organism/Header/Header";
import SignUpSection from "../organism/Singupsection/SignUpSection";
import SubScriptionSection from "../organism/Subscriptionsection/SubscriptionSection";
import Footer from "../organism/Footer/Footer";

import CardSection from "../organism/Cardsection/CardSection";
import ServiceCardSection from "../organism/Servicecardsection/ServiceCardSection";

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
