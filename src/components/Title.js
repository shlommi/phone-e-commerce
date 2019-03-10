import React from "react";
import styled from "styled-components";

export default function Title({ title, icon }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-1 text-center text-title">
        <UpperTitle>{icon}</UpperTitle>
        <h2 className="font-weight-bold text-blue">
          <strong>{title}</strong>
        </h2>
      </div>
    </div>
  );
}

const UpperTitle = styled.h3`
  color: var(--mainBlue);
`;
