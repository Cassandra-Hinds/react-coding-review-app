import React from "react";
import Characters from "./Characters";
import Arrays from "./Arrays";
import Objects from "./Objects";
import Loops from "./Loops";

export default function Review() {
  //let time = prompt("For how many months have you not coded?");
  //if (time > 1) {
  // alert("you really need to get back to coding");
  //} else {
  //   alert("Keep it up!");
  //}
  return (
    <div className="App">
      <div className="title">So Hi! I haven't coded in ages </div>
      <div className="sub-title">Well... in mouths</div>
      <div className="m-3">
        so I'm just going to review what I've learned so far.
      </div>
      <div>Since I'm a writer, I'm going to make this writer based</div>
      <hr />

      <div className="m-5">
        Right now I'm going to review the skill of using properties
      </div>
      <Characters name="Myla Maluo" />
      <Characters name="Dorin Marko" />
      <Characters name="Christine Joyce" />
      <Characters name="Jason Praise" />
      <hr />
      <div>What about when the names are in an array?</div>
      <Arrays />
      <hr />
      <div>Now let's do objects</div>
      <div></div>
      <Objects />
      <hr />
      <div>Now let's do some loops</div>
      <Loops />
    </div>
  );
}
