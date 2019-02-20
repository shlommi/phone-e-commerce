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
  grid-template-columns: 250px, 530px, 150px;
  align-items: center;
  grid-auto-flow: row;
  .nav-link {
      font-size: 1.7rem;
    }
    

  .nav-link {
    color: var(--mainWhite) !important;
  }

  img {
    width: 1.3rem;
    height: 3rem;
  }
 
    #logo {
      grid-column: 1 / 2;
      display: flex;
      justify-content: center;
    }

    .menu-wrapper {
      grid-column: 2/ 3;
      display: flex;
      justify-content: center;
    }

    #cart {
      grid-column: 3 / 4;
      justify-self: center;
    }


  @media (max-width: 900px) {

    grid-template-rows: 1fr 1fr;

    .nav-link {
      font-size: 1.6rem;
    }
    
     img {
    width: 1rem;
    height: 2.7rem;
    }
    
    #logo {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      display: flex;
      justify-content: center;
    }

    .menu-wrapper {
      grid-column: 1 / 4;
       grid-row: 2 / 3

      display: flex;
      justify-content: center;
    }

    #cart {
     display: none;
    }

    
  }
  @media (max-width: 446px) {

    .nav-link {
      font-size: 1.3rem;
    }

      img {
    width: .7rem;
    height: 2rem;
    }

    @media (max-width: 386px) {

    .nav-link {
      font-size: 0.9rem;
    }

     #logo{
      font-size: 1.4rem;
    }

      img {
    width: 1rem;
    height: 2.2rem;
    }
    

  }




`;
