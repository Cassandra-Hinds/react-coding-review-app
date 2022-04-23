import React from "react";

export default function Arrays() {
  let names = ["Mayla Malou", "Dorin Marko", "Christine Joyce", "Jason Praise"];

  return (
    <div>
      <div className="m-5"> One of my characters names are {names[0]}</div>
      <div className="m-5"> One of my characters names are {names[1]}</div>{" "}
      <div className="m-5"> One of my characters names are {names[2]}</div>{" "}
      <div className="m-5"> One of my characters names are {names[3]}</div>{" "}
    </div>
  );
}
