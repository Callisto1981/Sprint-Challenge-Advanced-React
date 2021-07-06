import React from "react";

const PlayerCard = props => {
  return (
    <div>
      {props.playerData.map(player => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <h5>{player.id}</h5>
          <h5>{player.country}</h5>
        </div>
      ))}
    </div>
  );
};
export default PlayerCard;
