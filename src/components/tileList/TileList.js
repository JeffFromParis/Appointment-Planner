import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contactOrAppointmentArray}) => {

  return (
    <div>
      {contactOrAppointmentArray.map((element,elementIndex) => <Tile value={element} key={elementIndex}/>)}
    </div>
  );
};
