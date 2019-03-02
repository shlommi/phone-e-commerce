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
          <img src={logowhite} alt="store" className="navbar-brand" />
          <Link to="/" className="nav-link lead">
            טוליפ נטורל
          </Link>
        </div>
        <div className="menu-wrapper">
          <Link to="/about" className="nav-link">
            אודות טוליפ
          </Link>
          <Link to="/" className="nav-link">
            המוצרים שלנו
          </Link>
          <Link to="/contact" className="nav-link">
            צרי קשר
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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto-fill);

  .nav-link {
    font-size: 4vw;
    color: var(--mainWhite) !important;
  }

  .nav-link,
  #logo {
    font-size: 4.5vw;
  }

  img {
    width: 4vw;
  }

  div button {
    font-size: 4vw;
  }

  #logo {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    padding: 0;
    margin: 0.5rem auto 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #cart {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    justify-self: center;
    margin: 0.5rem auto;
  }

  .menu-wrapper {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    justify-self: center;
    align-items: center;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto-fill);
    grid-template-rows: repeat(2, auto-fill);

    #logo {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      font-size: 2vw;
    }

    .menu-wrapper {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      justify-self: start;
    }

    #cart {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
    .nav-link {
      font-size: 2.5vw;
    }

    img {
      width: 3vw;
    }

    div button {
      font-size: 2.5vw;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: 1fr;
    justify-content: space-between;

    .menu-wrapper {
      grid-row: 2 / 3;
    }

    #cart {
      grid-row: 2 / 3;
    }

    #logo {
      font-size: 0.5vw;
    }
    .nav-link {
      font-size: 2vw;
    }

    img {
      width: 2vw;
    }

    div button {
      font-size: 1.5vw;
    }
  }
`;
