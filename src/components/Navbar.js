import React, { Component } from "react";
import { Link } from "react-router-dom";
import logowhite from "../logowhite.png";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="nav-wrapper container-fluid">
        <div id="logo">
          <img src={logowhite} alt="store" />
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
          <Link to="/cart">
            <span className="mr-1">
              <i className="fas fa-cart-plus" />
            </span>
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
    font-size: 1.2rem;
    color: var(--mainWhite) !important;
  }

  img {
    width: 1.2rem;
  }

  div button {
    font-size: 4vw;
  }

  #logo {
    font-size: 1.4rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    padding: 0;
    margin: 0.5rem auto 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cart {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    justify-self: center;
    align-self: center;

    &__button {
      background: transparent;
      border: 0.05rem solid var(--lightBlue);
      border-color: ${props =>
        props.cart ? " var(--mainYellow)" : "var(--lightBlue)"};
      color: var(--lightBlue);
      color: ${props =>
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
      border-radius: 0.5rem;
      padding: 0.2rem 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--lightBlue);
        background: ${props =>
          props.cart ? "var(--mainYellow)" : " var(--lightBlue)"};
        color: var(--mainBlue);
      }

      &:focus {
        outline: none;
      }
    }
  }

  a span i {
    margin-right: 1rem;
    color: var(--mainYellow);
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
    grid-template-columns: repeat(1, auto-fill);
    grid-template-rows: repeat(2, auto-fill);

    #logo {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      font-size: 1.5rem;
    }

    .menu-wrapper {
      grid-row: 2 / 3;
    }

    .cart {
      grid-row: 2 / 3;
      margin-right: 80vw;
    }

    .nav-link {
      font-size: 1.5rem;
    }

    img {
      width: 1.7rem;
    }

    div button {
      font-size: 2vw;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: 1fr;
    justify-content: space-between;

    .menu-wrapper {
      grid-row: 2 / 3;
    }

    .cart {
      grid-row: 2 / 3;
    }

    #logo {
      font-size: 1.5rem;
    }
    .nav-link {
      font-size: 1.5rem;
    }

    img {
      width: 1.7rem;
    }

    div button {
      font-size: 1.5vw;
    }
  }
`;
