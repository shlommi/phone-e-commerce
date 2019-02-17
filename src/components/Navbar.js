import React, { Component } from "react";
import { Link } from "react-router-dom";
import logowhite from "../logowhite.png";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logowhite} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item mr-5 ">
            <Link to="/" className="nav-link">
              המוצרים שלנו
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            העגלה שלי
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }

  img {
    width: 1.3rem;
    height: 3rem;
  }
`;
