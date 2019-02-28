import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import Title from "./Title";
import { FaBookOpen } from "react-icons/fa";
import IconsAbout from "./IconsAbout";

export default function About() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {value => {
          const { info, img } = value.aboutTulip;
          return (
            <div className="py-5">
              <Title title="אודות טוליפ" icon={<FaBookOpen />} />
              <div className="row">
                <div className="col-12 mx-auto">
                  <img src={img} alt="about" className="img-fluid py-3" />
                  <p className="lead"> {info}</p>
                </div>
              </div>
              <IconsAbout />
            </div>
          );
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}
