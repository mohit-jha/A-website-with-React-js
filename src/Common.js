import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <div className=" ">
      <section className="d-flex align-items-center">
        <div className="container-fluid  ">
          <div className="row ">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6 new pt-lg-0 order-2 order-lg-1  d-flex flex-column justify-content-center">
                  <h1 className="">
                    {props.heading}{" "}
                    <strong className="text-tomato" style={{ color: "red" }}>
                      {" "}
                      {props.strong}
                    </strong>
                  </h1>
                  <h5 className="mt-3">{props.para}</h5>
                  <div>
                    <NavLink to={props.link} className=" ">
                      <button
                        style={{ transition: "0.7s" }}
                        type="button"
                        class="btn btn-outline-primary px-3  rounded-pill"
                      >
                        {props.btn}
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-5 order-1 mb-5 order-lg-2 header-img ">
                  <img
                    src={props.img}
                    className="w-100 div img mt-5 mb-5"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
