import React from "react";
import CommonServices from "./CommonServices";
import CardData from "./CardData";
export default function Service(props) {
  return (
    <div>
      <div className="text-center my-4">
        <h1>Our Service</h1>
      </div>
      <div className = 'col-10 col-sm-10 mx-auto '>

      <div class="row gy-4 mb-3">
        {CardData.map((arr, index) => {
          return (
            <CommonServices
            title={arr.title}
            para={arr.para}
            cardImg={arr.cardImg}
              key={index}
              />
              );
            })}
      </div>
    </div>
            </div>
  );
}
