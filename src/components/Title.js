import React from "react";
import logoblack from "../logoblack.png";
import styled from "styled-components";

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-1 text-center text-title">
        <h1 className="font-weight-bold text-blue">
          <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
}
