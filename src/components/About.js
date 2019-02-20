import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import Title from "./Title";
import { FaBookOpen } from "react-icons/fa";

export default function About() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {value => {
          const { info, img } = value.aboutTulip;
          return (
            <div className="py-5">
              <div className="container">
                <Title title="אודות טוליפ" icon={<FaBookOpen />} />
                <AboutWrapper>
                  <div className="card">
                    <img src={img} alt="about" className="card-img-top" />
                    <div className="card-body">
                      <p> {info}</p>
                    </div>
                  </div>
                </AboutWrapper>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}

const AboutWrapper = styled.div`
  .card {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  .card-body {
    font-size: 1.3rem !important;
  }
  margin: 20px 0 20px 0;
`;
