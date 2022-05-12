import React from "react";

import PlatformCard from "components/molecules/Platformcard/PlatformCard";
import { platformInformation } from "data/platformInformation";
import "./CardSection.scss";

const CardSection = () => {
  return (
    <section className="card">
      <div className="card__section container">
        <h2 className="card__section-title">
          A Comprehensive Data Integration and <br /> Business Analytics
          Platform
        </h2>
        <ul className="card__section-grid">
          {platformInformation.map((element) => {
            return (
              <PlatformCard
                key={element.id}
                icon={element.icon}
                title={element.title}
                description={element.description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CardSection;
