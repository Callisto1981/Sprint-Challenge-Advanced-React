import React from "react";

const PlayerCard = props => {
  return (
    <div>
      {props.playerData.map(player => {
        <div key={player.id}>
          <h2>{player.name}</h2>
        </div>;
      })}
    </div>
  );
};
export default PlayerCard;
