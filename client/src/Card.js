import React, { useState } from "react";
import cx from "classnames";

const Card = ({ card }) => {
  return (
    <div className={cx({ card: true, flippable: !!card.back })}>
      <div className="card-content">
        <div className="front">
          <img src={require(`./cards/${card.front}.png`)} />
        </div>
        {card.back && (
          <div className="back">
            <img src={require(`./cards/${card.back}.png`)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;