import React from "react";
import Card from "./Card";
import { card1, card2, card3 } from "./Imports/cardImports";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <Card
        title={"WAGYU BEEF CHILI"}
        description={"shredded cheese, spicy brioche croutons"}
        image={card1}
      />
      <Card
        title={"New Restaurants"}
        description={"Added Daily"}
        image={card2}
      />
      <Card
        title={"To Everywhere from Anywhere"}
        description={"Tasty Treats"}
        image={card3}
      />
    </div>
  );
};

export default HeadlineCards;
