import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10  mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                רוקן עגלה
              </button>
            </Link>
            <h5>
              <strong>
                <span> סך הכל לפני מע"מ: </span>
                {cartSubTotal} ₪
              </strong>
            </h5>
            <h5>
              <strong>
                <span> תוספת מע"מ: </span>
                {cartTax} ₪
              </strong>
            </h5>

            <h5>
              <strong>
                <span> מחיר סופי: </span> {cartTotal} ₪
              </strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
