import React, { useState } from "react";

import PackageProductBtn from "components/atom/Packageproductbtn/PackageProductBtn";
import ServiceCard from "components/molecule/Servicecard/ServiceCard";
import { businessServices, communityServices } from "data/serviceInformation";
import "./ServiceCardSection.scss";

const ServiceCardSection = () => {
  const [isBusnessService, setBusnessService] = useState(true);
  const [isCommunityService, setCommunityService] = useState(false);

  const handleClickBusness = () => {
    setBusnessService(true);
    setCommunityService(false);
  };

  const handleClickCommunity = () => {
    setBusnessService(false);
    setCommunityService(true);
  };

  return (
    <section className="service__package">
      <div
        id="package__section"
        className="service__package__section container"
      >
        <h2>Affordable Services Package</h2>
        <PackageProductBtn
          clickBusiness={handleClickBusness}
          clickCommunity={handleClickCommunity}
        />
        <div className="service__package__section__container">
          {isBusnessService && (
            <>
              {businessServices.map((elem) => {
                return (
                  <ServiceCard
                    key={elem.id}
                    title={elem.title}
                    price={elem.price}
                    keyword={elem.keyword}
                    tracking={elem.tracking}
                    hour={elem.hour}
                    newsLetter={elem.newsLetter}
                  />
                );
              })}
            </>
          )}
          {isCommunityService && (
            <>
              {communityServices.map((elem) => {
                return (
                  <ServiceCard
                    key={elem.id}
                    title={elem.title}
                    price={elem.price}
                    keyword={elem.keyword}
                    tracking={elem.tracking}
                    hour={elem.hour}
                    newsLetter={elem.newsLetter}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;
