import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { checkoutPngs, footerIcons } from "../data";

import logowhite from "../logowhite.png";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Footer() {
  return (
    <React.Fragment>
      <FooterWrapper>
        <hr />
        <div className="content-wrapper">
          <div className="logo">
            <div>
              <img src={logowhite} alt="store" />
            </div>
            <Link to="/">טוליפ נטורל</Link>
          </div>
          <div className="nav-footer">
            <Link to="/">דף הבית</Link>
            <Link to="/about">אודות טוליפ</Link>
            <Link to="/">המוצרים שלנו</Link>
            <Link to="/contact">צרי קשר</Link>
          </div>
          <div className="social-icons-wrapper ">
            <span>עקבו אחרינו</span>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/tulipnaturall/"
              target="_blank"
            >
              <span className="mr-2">
                <i className="fab fa-facebook-square" />
              </span>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/tulipnatural/"
              target="_blank"
            >
              <span className="mr-2">
                <i className="fab fa-instagram" />
              </span>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/TulipNatural"
              target="_blank"
            >
              <span className="mr-2">
                <i className="fab fa-twitter" />
              </span>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCfcKoRWBolo4rf-8FYL3KLA"
              target="_blank"
            >
              <span className="mr-2">
                <i className="fab fa-youtube-square" />
              </span>
            </a>
          </div>
          <div className="checkout-icons-wrapper">
            {checkoutPngs.map(item => {
              return <img key={item.alt} src={item.img} alt={item.alt} />;
            })}
          </div>
          <div className="footer-icons-wrapper">
            {footerIcons.map(item => {
              return <img key={item.alt} src={item.img} alt={item.alt} />;
            })}
          </div>
          <Formik
            initialValues={{
              email: ""
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
              setTimeout(() => {
                resetForm();
              }, 700);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Required")
                .isValid("not valid")
            })}
          >
            {props => {
              const {
                values,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                errors
              } = props;
              return (
                <React.Fragment>
                  <form className="form-box" onSubmit={handleSubmit}>
                    <p>רוצה לקבל מבצעים והטבות?</p>
                    <div className="input-box">
                      <label htmlFor="email" style={{ display: "block" }} />
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-box__input"
                        placeholder="הכניסי כתובת מייל"
                      />
                      <button
                        className="input-box__btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        שילחי
                      </button>
                      {errors.name && touched.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                  </form>
                </React.Fragment>
              );
            }}
          </Formik>

          <div className="powered-by">
            <p className="powered-by__meaz">מאז 2001</p>
            <p className="powered-by__text">powered by ShlomiCohen</p>
          </div>
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
  position: relative;

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
    text-align: center;

    .powered-by {
      text-align: center;
      position: bottom;
      padding: 0;
      bottom: 0;
    }
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
    flex: 1;
    margin-bottom: 1.3rem;
    align-items: end;
    justify-content: center;

    & span {
      margin-left: 0.6rem;
    }
  }

  .checkout-icons-wrapper {
    display: flex;
    flex: 1;
    margin-bottom: 2rem;
    align-items: end;
    justify-content: center;

    img {
      margin-left: 1rem;
    }
  }

  .footer-icons-wrapper {
    display: flex;
    flex: 1;
    margin-bottom: 1.3rem;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 1rem;
    }
  }

  .form-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;

    .input-box {
      display: flex;
      flex: 0 0 60%;

      &__input {
        font-size: 16px;
        background: transparent;
        color: var(--mainWhite);
        padding: 10px 10px 10px 5px;
        display: block;
        border: none;
        border-bottom: 1px solid var(--mainWhite);

        ::placeholder {
          color: var(--mainWhite) !important;
        }

        &:focus {
          outline: none;
        }
      }

      &__btn {
        background: transparent;
        font-size: 18px;
        color: var(--mainWhite);
        border: none;
        border-bottom: 1px solid var(--mainWhite);
      }
    }
  }

  @media (min-width: 768px) {
    .content-wrapper {
      display: grid;
      grid-gap: 2em;
      grid-template-areas:
        "logo logo"
        "socialIcons socialIcons"
        "navFooter navFooter "
        "formBox formBox "
        "checkoutIcons footerIcons"
        "poweredBy poweredBy";
      align-items: center;

      & > * {
        font-size: 1.3rem;
        margin-top: 1.3rem;
      }
    }

    .nav-footer {
      grid-area: navFooter;
      justify-self: center;
      align-items: start;
      flex-direction: row;

      & > *:after {
        content: "|";
        padding: 0.7rem;
      }

      & > *:last-child:after {
        content: "";
      }
    }

    .social-icons-wrapper {
      grid-area: socialIcons;
      justify-self: center;
    }

    .checkout-icons-wrapper {
      grid-area: checkoutIcons;
    }
    .footer-icons-wrapper {
      grid-area: footerIcons;
      justify-self: center;
    }

    .form-box {
      grid-area: formBox;
      justify-self: center;
    }

    .powered-by {
      grid-area: poweredBy;
      justify-self: center;
    }

    .logo {
      grid-area: logo;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-self: center;
    }
  }
`;
