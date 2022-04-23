import React from "react";

export default function Arrays() {
  let characters = [
    {
      name: "Myla Malou"
    },
    { name: "Dorin Marko" },
    { name: "Christine Joyce" },
    { name: "Jason Praise" }
  ];
  return (
    <div>
      <div className="m-5">
        One of my characters names are {characters[0].name}
      </div>
      <div className="m-5">
        One of my characters names are {characters[1].name}
      </div>
      <div className="m-5">
        One of my characters names are {characters[2].name}
      </div>
      <div className="m-5">
        One of my characters names are {characters[3].name}
      </div>
    </div>
  );
}
