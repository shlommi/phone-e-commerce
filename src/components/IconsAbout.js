import React from "react";
import {
  FaShippingFast,
  FaShekelSign,
  FaShieldAlt,
  FaHandshake,
  FaEnvira,
  FaClipboardCheck
} from "react-icons/fa";
import styled from "styled-components";

export default function IconsAbout() {
  const icons = [
    {
      text: "משלוח חינם",
      img: <FaShippingFast />
    },
    {
      text: "החזר כספי 105%",
      img: <FaShekelSign />
    },
    {
      text: "קניה מאובטחת",
      img: <FaShieldAlt />
    },
    {
      text: "19 שנות ניסיון",
      img: <FaHandshake />
    },
    {
      text: "מוצרים ללא פרבנים",
      img: <FaEnvira />
    },
    {
      text: "מאושר משרד הבריאות",
      img: <FaClipboardCheck />
    }
  ];

  return (
    <React.Fragment>
      <div className="container">
        <IconsWrapper>
          <div id="my-grid">
            {icons.map(item => {
              return (
                <div id="icon-box">
                  <span>
                    <h5>{item.img}</h5>
                  </span>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </IconsWrapper>
      </div>
    </React.Fragment>
  );
}

const IconsWrapper = styled.div`
  color: var(--mainBlue);
  margin: 50px 0 15px 0;
  font-size: 1.2rem;

  p {
    text-align: center;
  }

  h5 {
    font-size: 2.3rem !important;
  }

  #my-grid {
    display: grid;
    padding: 5px;
    margin: 0px 5px 0 5px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  #icon-box {
    justify-self: center;
    align-self: center;
  }

  span {
    text-align: center;
  }

  @media (max-width: 768px) {
    #my-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
