import React from "react";

import {ExampleStructureObject} from '../tempdata/Structure';

export default function Structure() {
  return (
    <>
      <h1>Structure</h1>

      {
        ExampleStructureObject.data.map(unit => {
          return(
            <div className="unit" key={unit.UnitName}>
              <p className="unit__name">{unit.UnitName}</p>
              {unit.Empl.map(empl => <div key={empl} className="unit__empl">{empl}</div>  )}
            </div>
          );
        })
      }

    </>
  );
}
