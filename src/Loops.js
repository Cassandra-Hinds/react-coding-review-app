import React from "react";

export default function Loops() {
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
      <div>
        {characters.map(function (character, index) {
          return (
            <div key="index" className="m-5">
              One of my charcters' names are {character.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
