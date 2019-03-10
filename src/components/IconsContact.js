import React from "react";
import { MdCall, MdMail } from "react-icons/md";
import styled from "styled-components";

export default function IconsAbout() {
  const icons = [
    {
      text: "טלפון",
      info: "03-6535555",
      img: <MdCall />
    },
    {
      text: "מייל",
      info: "holon@tulipnatural.com",
      img: <MdMail />
    }
  ];

  return (
    <React.Fragment>
      <div className="container">
        <IconsWrapper>
          <div id="phoneMail">
            {icons.map(item => {
              return (
                <div id="icon-box" key={item.info}>
                  <h5>{item.img}</h5>
                  <p>{item.text}</p>
                  <span>{item.info}</span>
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
  font-size: 1.2rem;

  p {
    text-align: center;
  }

  h5 {
    font-size: 8vw !important;
    text-align: center;
  }

  #phoneMail {
    display: flex;
    flex-direction: column;
    padding: 10%;
    align-items: center;
    justify-content: center;
  }

  #icon-box {
    justify-self: center;
    align-self: center;
    padding: 1vw;
    margin-bottom: 2em;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    #phoneMail {
      flex-direction: row;
      padding: 6%;
      align-items: center;
      justify-content: space-around;
    }

    h5 {
      font-size: 6vw !important;
    }
  }

  @media (min-width: 768px) {
    #phoneMail {
      flex-direction: row;
      padding: 6%;
      align-items: center;
      justify-content: space-around;

      h5 {
        font-size: 4vw !important;
      }
    }
  }
`;
