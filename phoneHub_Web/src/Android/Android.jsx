import React from "react";
import Samsung from "./Samsung";
import Google from "./Google";
import Motorola from "./Motorola";
import Nothing from "./Nothing";
import Oneplus from "./Oneplus";

function Android() {
  return (
    <div>
      <div className="an-heading text-center">
        <p className="mb-0">An Android device</p>
        <p>for everyone.</p>
      </div>

        <Samsung/>
        <Google/>
        <Motorola/>
        <Oneplus/>
        <Nothing/>

    </div>
  );
}

export default Android;
