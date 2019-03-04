import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { checkoutPngs } from "../data";

import logowhite from "../logowhite.png";

export default function Footer() {
  return (
    <React.Fragment>
      <FooterWrapper>
        <div className="nav-footer">
          <ul>
            <li>דף הבית</li>
            <li>אודות טוליפ </li>
            <li>המוצרים שלנו</li>
            <li>צרי קשר</li>
          </ul>
        </div>
        <div className="logo">
          <img src={logowhite} alt="store" />
          <Link to="/">טוליפ נטורל</Link>
        </div>
        <div className="social-icons-wrapper">
          <span>עקבו אחרינו</span>
          <Link to="/">
            <span className="mr-2">
              <i class="fab fa-facebook-square" />
            </span>
          </Link>
          <Link to="/">
            <span className="mr-2">
              <i class="fab fa-instagram" />
            </span>
          </Link>
          <Link to="/">
            <span className="mr-2">
              <i class="fab fa-twitter" />
            </span>
          </Link>
          <Link to="/">
            <span className="mr-2">
              <i class="fab fa-youtube-square" />
            </span>
          </Link>
        </div>
      </FooterWrapper>
      <FooterWrapper>
        <div className="checkout-icons-wrapper">
          {checkoutPngs.map(item => {
            return <img src={item.img} alt={item.alt} />;
          })}
        </div>
      </FooterWrapper>
    </React.Fragment>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--mainBlue);
  color: var(--mainWhite);
  font-size: 1em;
`;
