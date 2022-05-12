import React from "react";

import Header from "components/organisms/Header/Header";
import FirstSection from "components/organisms/Firstsection/FirstSection";
import SignUpSection from "components/organisms/Singupsection/SignUpSection";
import SubScriptionSection from "components/organisms/Subscriptionsection/SubscriptionSection";
import Footer from "components/organisms/Footer/Footer";

import CardSection from "components/organisms/Cardsection/CardSection";
import ServiceCardSection from "components/organisms/Servicecardsection/ServiceCardSection";

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
