import React from "react";
import { NavLink } from "react-router-dom";
import img from "../src/images/ho.jpg";
export default function CommonServices(props) {
  return (
    <>
      <div className="col-sm-4 container-sm">

        <div className="card mx-auto w-100" style={{ width: "21rem" }}>
          <img src={props.cardImg} style={{height:'320px', width:''}} class="card-img-top col-sm-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.para}</p>
            <NavLink to="#" class="btn btn-primary">
              Go somewhere
            </NavLink>
        </div>
      </div>
      </div>
    </>
  );
}
