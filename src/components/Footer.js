import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { checkoutPngs, footerIcons } from "../data";

import logowhite from "../logowhite.png";

export default function Footer() {
  return (
    <React.Fragment>
      <FooterWrapper>
        <hr />
        <div className="content-wrapper">
          <div className="nav-footer">
            <Link to="/">דף הבית</Link>
            <Link to="/">אודות טוליפ</Link>
            <Link to="/">המוצרים שלנו</Link>
            <Link to="/">צרי קשר</Link>
          </div>
          <div className="logo">
            <div>
              <img src={logowhite} alt="store" />
            </div>
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
          <div className="checkout-icons-wrapper">
            {checkoutPngs.map(item => {
              return <img src={item.img} alt={item.alt} />;
            })}
          </div>
          <div className="footer-icons-wrapper">
            {footerIcons.map(item => {
              return <img src={item.img} alt={item.alt} />;
            })}
          </div>

          <form className="content-wrapper__form">
            <p>רוצה לקבל מבצעים והטבות?</p>
            <input
              type="text"
              name="footerMail"
              className="content-wrapper__form__input"
              placeholder="הכניסי כתובת מייל"
            />
            <button className="content-wrapper__form__button" type="submit">
              שילחי
            </button>
          </form>
        </div>
      </FooterWrapper>
    </React.Fragment>
  );
}

const FooterWrapper = styled.div`
  background-color: var(--mainBlue);
  color: var(--mainWhite);
  padding: 1rem;
  font-size: 1.2rem;
   

  hr {
    width: 50vw;
    opacity: 0.5;
    background-color: var(--mainWhite) !important;
    margin: 10px auto;
  }

  .logo {
    display: none;
  }

  a {
    color: var(--mainWhite);
    margin-bottom: 0.5rem;
  }

  a,
  a:hover,
  a:active,
  a:visited,
  a:focus {
    text-decoration: none !important;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.3rem;
  }

  .social-icons-wrapper {
    display: flex;
    flex: 1 
    margin-bottom: 1.3rem;
    align-items: end;
    justify-content: center;
    & span {
      margin-left: 0.6rem;
    }
  }

  .checkout-icons-wrapper {
    display: flex;
    flex: 1 
    margin-bottom: 1.3rem ;
    align-items: end;
    justify-content: center;
      img {
      margin-left: 1rem;
    }
  }

  .footer-icons-wrapper {
    display: flex;
    flex: 1
    margin-bottom: 1.3rem;
    justify-content: space-around;
    align-items: center;

    img {
      margin-left: 1rem;
    }
  }

  .content-wrapper__form {
    display: flex;
    flex: 1;

    &__input {
      background: transparent;
      font-size:18px;
      color: var(--mainWhite);
      padding:10px 10px 10px 5px;
      display:block;
      width:300px;
      border:none;
      border-bottom:1px solid var(--mainWhite);

      &:focus {
        outline:none; 
      }

    }

    &__button {
      background: transparent;
      display: block;
      font-size:18px;
      color: var(--mainWhite);
      border:none;
      margin: 
      border-bottom:1px solid var(--mainWhite);
    }
  } 
  @media (min-width: 768px) {

    .content-wrapper {
      display: grid;
      width: 100%;
      height: 70%;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      justify-content: space-around;
    }

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
