import React from "react";

import Header from "components/organism/Header/Header";
import FirstSection from "components/organism/Firstsection/FirstSection";
import SignUpSection from "components/organism/Singupsection/SignUpSection";
import SubScriptionSection from "components/organism/Subscriptionsection/SubscriptionSection";
import Footer from "components/organism/Footer/Footer";

import CardSection from "components/organism/Cardsection/CardSection";
import ServiceCardSection from "components/organism/Servicecardsection/ServiceCardSection";

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
