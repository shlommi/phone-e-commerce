import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-4 text-center">
      <div className="col-12 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-12 mx-auto col-lg-2">
        <span className="d-lg-none">מוצר:</span> {title}
      </div>
      <div className="col-12 mx-auto col-lg-2">
        <strong>
          <span className="d-lg-none">מחיר: </span>
          {price}
        </strong>
      </div>
      {/* start of button col */}
      <div className="col-12 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span onClick={() => decrement(id)} className="btn btn-black mx-1">
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span onClick={() => increment(id)} className="btn btn-black mx-1">
              +
            </span>
          </div>
        </div>
      </div>
      {/* enf of bottons col */}
      <div className="col-12 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-12 mx-auto col-lg-2">
        <strong> בסך הכל : {total} ₪</strong>
      </div>
    </div>
  );
}
