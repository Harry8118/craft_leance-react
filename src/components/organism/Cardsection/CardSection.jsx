import React from "react";
import PlatformCard from "../../molecule/Platformcard/PlatformCard";
import { platformInformation } from "../../../data/platformInformation";
import "./CardSection.scss";

const CardSection = () => {
  return (
    <section className="card_section">
      <div className="card_section container">
        <h2 className="card_section-title">
          A Comprehensive Data Integration and <br /> Business Analytics
          Platform
        </h2>
        <ul className="grid_container">
          {platformInformation.map((element, index) => {
            return (
              <PlatformCard
                key={index}
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
