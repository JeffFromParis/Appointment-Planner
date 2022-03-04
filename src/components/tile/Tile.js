import React from "react";

export const Tile = ({value}) => {

  const elements = Object.values(value); //??
  let tileClass = '';

  return (
    <div className="tile-container">
      {
        elements.map((element, index) => {
          tileClass = (index===0) ? 'tile-title' : 'tile';
          console.log(`Classe de l'element ${index}: ${tileClass}`)
          return <p className={tileClass} key={index}>{element}</p>;
        })
      }
    </div>
  );
};
