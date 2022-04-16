import React, { useState } from "react";
import PackageProductBtn from "../../atom/Packageproductbtn/PackageProductBtn";
import ServiceCard from "../../molecule/Servicecard/ServiceCard";
import {
  businessServices,
  communityServices,
} from "../../../data/serviceInformation";
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
    <section className="service_package-section">
      <div id="package_section" className="package_section">
        <h2 className="package_title">Affordable Services Package</h2>
        <PackageProductBtn
          clickBusiness={handleClickBusness}
          clickCommunity={handleClickCommunity}
        />
        <div className="serviceContainer">
          {isBusnessService && (
            <>
              {businessServices.map((elem, index) => {
                return (
                  <ServiceCard
                    key={index}
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
              {communityServices.map((elem, index) => {
                return (
                  <ServiceCard
                    key={index}
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
