import React, { Component } from "react";
import { Link } from "react-router-dom";
import logowhite from "../logowhite.png";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="nav-wrapper container-fluid">
        <div id="logo">
          <Link to="/" className="nav-link" id="logo">
            <img src={logowhite} alt="store" className="navbar-brand" />
            <h2>טוליפ נטורל</h2>
          </Link>
        </div>

        <div className="menu-wrapper">
          <Link to="/" className="nav-link">
            <h2> אודות טוליפ</h2>
          </Link>
          <Link to="/" className="nav-link">
            <h2>המוצרים שלנו</h2>
          </Link>
          <Link to="/" className="nav-link">
            <h2> צרי קשר</h2>
          </Link>
        </div>
        <div id="cart">
          <Link to="/cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              העגלה שלי
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-auto-flow: row;


  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.4rem;
  }
#logo {
 grid-column: 1 / 3;
 display: flex;
  justify-content: center;
}

.menu-wrapper {
  grid-column: 4 / 10;
  display: flex;
  justify-content: center;

}
#cart {
  grid-column: 11 / 13;
   justify-self: center;
}
  img {
    width: 1.3rem;
    height: 3rem;
  }

  // for mobile

  @media (max-width: 670px) {

`;
