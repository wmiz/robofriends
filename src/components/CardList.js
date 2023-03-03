import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((bot) => {
        return <Card key={bot.username} bot={bot} />;
      })}
    </>
  );
};

export default CardList;
