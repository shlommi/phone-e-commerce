import React from "react";

export default function CartColumns() {
  return (
    <div>
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <strong>מוצרים</strong>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <strong>שם המוצר</strong>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <strong>מחיר</strong>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <strong>כמות</strong>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <strong>הסר</strong>
            </p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>
              <strong>סך הכל</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
